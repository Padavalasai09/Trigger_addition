import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Fetch all records from PipelineDummy table
    const pipelineData = await prisma.pipelineDummy.findMany({
      orderBy: {
        createdAt: 'desc', // Optional: Sort by newest first
      },
    });

    return NextResponse.json({
      success: true,
      data: pipelineData,
      count: pipelineData.length,
    });

  } catch (error: any) {
    console.error('Error fetching pipeline data:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch pipeline data',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic'; // Required for real-time data fetching