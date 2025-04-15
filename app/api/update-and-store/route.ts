// pages/api/updatePipelineStatuses.ts
import { NextRequest, NextResponse } from "next/server";
import { updatePipelineStatuses } from "@/lib/updatePipelineStatus";

export async function GET(req: NextRequest) {
  try {
    console.log("Updating pipeline statuses...");
    await updatePipelineStatuses(); // Call your function here
    
    return NextResponse.json({
      success: true,
      message: "Pipeline statuses updated successfully.",
    });
  } catch (err: any) {
    console.error("Error updating pipeline statuses:", err.message);
    return NextResponse.json({
      success: false,
      error: "Failed to update pipeline statuses.",
      details: err.message,
    }, { status: 500 });
  }
}
