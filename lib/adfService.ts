// lib/adfService.ts
import axios from "axios";
import { getAzureAccessToken } from "./azureAuth";
import { subDays, formatISO } from "date-fns";

export async function getPipelineRuns(daysToLookBack = 7) {
  console.log("Updating the data")
  const token = await getAzureAccessToken();

  const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID!;
  const resourceGroup = process.env.AZURE_RESOURCE_GROUP!;
  const factoryName = process.env.AZURE_FACTORY_NAME!;

  // I am getting all the pipelines which are there
  const pipelineDefResponse = await axios.get(
    `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.DataFactory/factories/${factoryName}/pipelines?api-version=2018-06-01`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const pipelineDefinitions = pipelineDefResponse.data.value;
  const pipelineNames = pipelineDefinitions.map((p: any) => p.name);

  
  const now = new Date();
  const lastUpdatedAfter = subDays(now, daysToLookBack);
  
  try {
    // getting the status of the pipelines after runned
    const queryResponse = await axios.post(
      `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.DataFactory/factories/${factoryName}/queryPipelineRuns?api-version=2018-06-01`,
      {
        lastUpdatedAfter: "2025-04-10T11:23:53.7223509Z",
        lastUpdatedBefore: "2025-04-20T11:23:53.7223509Z",
        filters: [
          {
            operand: "PipelineName",
            operator: "In",
            values: pipelineNames
          }
        ],
        orderBy: [
          {
            orderBy: "RunStart",
            order: "Desc"
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Group runs by pipeline name to get the most recent for each
    const runsByPipeline = new Map<string, any>();
    queryResponse.data.value.forEach((run: any) => {
      if (!runsByPipeline.has(run.pipelineName) || 
          new Date(run.runStart) > new Date(runsByPipeline.get(run.pipelineName).runStart)) {
        runsByPipeline.set(run.pipelineName, run);
      }
    });

    // Step 3: Combine pipeline definitions with their most recent run
    const enrichedPipelines = pipelineDefinitions.map((pipeline: any) => {
      const pipelineName = pipeline.name;
      const recentRun = runsByPipeline.get(pipelineName);

      return {
        name: pipelineName,
        runId: recentRun?.runId || null,
        status: recentRun?.status || "NeverRun",
        message: recentRun?.message || recentRun?.invokedBy?.name || null,
        runStart: recentRun?.runStart || null,
        runEnd: recentRun?.runEnd || null,
        durationInMs: recentRun?.durationInMs || null,
        properties: pipeline.properties || {},
      };
    });

    console.log(enrichedPipelines)

    return enrichedPipelines;

  } catch (err) {
    console.error("Error querying pipeline runs", err?.response?.data || err.message);

    return pipelineDefinitions.map((pipeline: any) => ({
      name: pipeline.name,
      runId: null,
      status: "Unknown",
      message: "Failed to fetch run data",
      runStart: null,
      runEnd: null,
      properties: pipeline.properties || {},
    }));
  }
}