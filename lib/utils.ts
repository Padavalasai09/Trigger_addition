
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// app/lib/pipeline-utils.ts

import { Activity, Pipeline } from '@prisma/client';

// Determine activity status based on policy
export function getActivityStatus(activity: Activity): 'completed' | 'failed' | 'running' | 'pending' {
  if (!activity.policy) return 'pending';
  
  const policy = typeof activity.policy === 'string' 
    ? JSON.parse(activity.policy) 
    : activity.policy;
  
  if (policy.executionStatus === 'Succeeded') return 'completed';
  if (policy.executionStatus === 'Failed') return 'failed';
  if (policy.executionStatus === 'InProgress') return 'running';
  
  return 'pending';
}

// Determine pipeline run status based on activities
export function getPipelineStatus(pipeline: Pipeline & { activities: Activity[] }): 'Succeeded' | 'Failed' | 'Running' | 'Pending' {
  if (!pipeline.activities || pipeline.activities.length === 0) {
    return 'Pending';
  }
  
  const activityStatuses = pipeline.activities.map(activity => getActivityStatus(activity));
  
  if (activityStatuses.some(status => status === 'failed')) {
    return 'Failed';
  }
  
  if (activityStatuses.some(status => status === 'running')) {
    return 'Running';
  }
  
  if (activityStatuses.every(status => status === 'completed')) {
    return 'Succeeded';
  }
  
  return 'Pending';
}

// Extract time information from activity policy
export function getActivityTiming(activity: Activity) {
  const policy = typeof activity.policy === 'string'
    ? JSON.parse(activity.policy)
    : activity.policy;
  
  const startTime = policy?.executionStartTime || null;
  const endTime = policy?.executionEndTime || null;
  const duration = startTime && endTime
    ? new Date(endTime).getTime() - new Date(startTime).getTime()
    : null;
  
  return { startTime, endTime, duration };
}

// Format time duration
export function formatDuration(ms?: number | null): string {
  if (!ms) return "N/A";
  
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor(ms / (1000 * 60 * 60));
  
  return [
    hours > 0 ? `${hours}h` : "",
    minutes > 0 ? `${minutes}m` : "",
    `${seconds}s`
  ].filter(Boolean).join(" ");
}

// Format date
export function formatDate(dateString?: string | null): string {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleString();
}

// Extract metadata from annotations
export function extractMetadata(annotations: any): Record<string, string> {
  if (!annotations) return {};
  
  try {
    const annotationObj = typeof annotations === 'string'
      ? JSON.parse(annotations)
      : annotations;
      
    const metadata: Record<string, string> = {};
    
    // Extract common metadata fields
    Object.entries(annotationObj).forEach(([key, value]) => {
      if (typeof value === 'string') {
        // Capitalize first letter of key for display
        const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
        metadata[displayKey] = value;
      }
    });
    
    return metadata;
  } catch (error) {
    console.error('Error parsing annotations:', error);
    return {};
  }
}