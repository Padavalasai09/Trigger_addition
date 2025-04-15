// lib/updatePipelineStatuses.ts
import axios from "axios";
import { prisma } from "@/lib/prisma";
import { getAzureAccessToken } from "./azureAuth";

export async function updatePipelineStatuses() {
    console.log("camed to update it ")
  const token = await getAzureAccessToken();

  const pipelines = await prisma.pipeline.findMany({
    where: {
      status: {
        notIn: ["Succeeded", "Failed"],
      }
    },
  });

  for (const pipeline of pipelines) {
    try {

        console.log(pipeline.id)
      const runResponse = await axios.get(
        `https://management.azure.com/subscriptions/${process.env.AZURE_SUBSCRIPTION_ID}/resourceGroups/${process.env.AZURE_RESOURCE_GROUP}/providers/Microsoft.DataFactory/factories/${process.env.AZURE_FACTORY_NAME}/pipelineruns/${pipeline.id}?api-version=2018-06-01`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(runResponse)
      

      const runInfo = runResponse.data;

      await prisma.pipeline.update({
        where: { id: pipeline.id },
        data: {
          status: runInfo.status
        },
      });
      console.log("Pipeline updated successfully")
    } catch (err: any) {
        console.log("Failed to update the pipeline")
        
    //   console.error(`❌ Failed to update status for ${pipeline.name}:`, err?.response?.data || err.message);
    }
  }
}
