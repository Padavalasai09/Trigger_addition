
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


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