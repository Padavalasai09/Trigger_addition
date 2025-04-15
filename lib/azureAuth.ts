// lib/azureAuth.ts
import axios from "axios";

export async function getAzureAccessToken(): Promise<string> {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;
  const resource = "https://management.azure.com/";

  const response = await axios.post(
    `https://login.microsoftonline.com/${tenantId}/oauth2/token`,
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId!,
      client_secret: clientSecret!,
      resource,
    })
  );

  return response.data.access_token;
}
