// app/api/activity-runs/[pipelineRunId]/route.ts
import { NextResponse } from 'next/server';
import { getAzureAccessToken } from '@/lib/azureAuth';

export async function GET(
  request: Request,
  { params }: { params: { pipelineRunId: string } }
) {
  console.log("1. API Route invoked");
  console.log("2. Params received:", params);
  
  try {
    const pipelineRunId = params.id;
    
    console.log("3. Pipeline Run ID:", pipelineRunId);
    
    if (!pipelineRunId) {
      console.log("4. Pipeline Run ID is missing");
      return new Response(JSON.stringify({ error: 'Pipeline run ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Your Azure authentication details
    const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID || 'ec6f70bc-26ec-45ce-8ebf-cf90867cc85e';
    const resourceGroup = process.env.AZURE_RESOURCE_GROUP || 'NEXUS';
    const factoryName = process.env.AZURE_FACTORY_NAME || 'adfnexustest';
    
    console.log("5. Preparing to call Azure API");
    
    // Azure API endpoint
    const apiUrl = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/Microsoft.DataFactory/factories/${factoryName}/pipelineruns/${pipelineRunId}/queryActivityruns?api-version=2018-06-01`;
    
    console.log("6. Getting Azure token");
    // Get Azure access token
    const token = await getAzureAccessToken();
    console.log("7. Token received, length:", token ? token.length : 0);
    
    console.log("8. Calling Azure API:", apiUrl);
    // Call Azure Data Factory API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lastUpdatedAfter: "2025-01-01T00:00:00Z",
        lastUpdatedBefore: "2026-01-02T23:59:59Z"
      })
    });
    
    console.log("9. Azure API response status:", response.status);
    
    
    if (!response.ok) {
      console.error(`10. Azure API error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`11. Error details: ${errorText}`);
      
      return new Response(JSON.stringify({ 
        error: `Failed to fetch activity runs: ${response.statusText}`,
        details: errorText
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log("12. Processing successful response");
    const data = await response.json();
    console.log(data)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error: any) {
    console.error("13. Exception caught:", error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch activity runs',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}