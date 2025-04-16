import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {

    const pipelineData = await prisma.pipelineDummy.findMany({
      orderBy: {
        createdAt: 'desc', 
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