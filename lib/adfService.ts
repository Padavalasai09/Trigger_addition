// lib/adfService.ts
import axios from "axios";
import { getAzureAccessToken } from "./azureAuth";

export async function getPipelineRuns() {
  const token = await getAzureAccessToken();

  const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID!;
  const resourceGroup = process.env.AZURE_RESOURCE_GROUP!;
  const factoryName = process.env.AZURE_FACTORY_NAME!;

  // Step 1: Get all pipeline definitions
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

  const enrichedPipelines = [];

  for (const pipeline of pipelineDefinitions) {
    const pipelineName = pipeline.name;

    try {
      // Step 2: Create a run to get a runId
      const createRunResponse = await axios.post(
        `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.DataFactory/factories/${factoryName}/pipelines/${pipelineName}/createRun?api-version=2018-06-01`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const runId = createRunResponse.data.runId;

      // Step 3: Get the status of that runId
      const runStatusResponse = await axios.get(
        `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.DataFactory/factories/${factoryName}/pipelineruns/${runId}?api-version=2018-06-01`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const runInfo = runStatusResponse.data;

      enrichedPipelines.push({
        name: pipelineName,
        runId: runInfo.runId || null,
        status: runInfo.status || "Unknown",
        message: runInfo.message || runInfo.invokedBy?.name || null,
        runStart: runInfo.runStart || null,
        runEnd: runInfo.runEnd || null,
        properties: runInfo.properties || {}, // Including pipeline properties
      });

    } catch (err) {
      console.error(`❌ Error fetching run info for pipeline ${pipelineName}`, err?.response?.data || err.message);
      enrichedPipelines.push({
        name: pipelineName,
        runId: null,
        status: "Error",
        message: err?.response?.data?.error?.message || "",
        runStart: null,
        runEnd: null,
        properties: {}, // Handle missing properties gracefully
      });
    }
  }

  return enrichedPipelines;
}
