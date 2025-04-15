import React from "react";

interface PipelineCardProps {
  pipelineName: string;
  status: string;
  startTime: string;
  endTime: string;
  duration: string;
  dataVolume?: string;
}

export default function PipelineCard({
  pipelineName,
  status,
  startTime,
  endTime,
  duration,
  dataVolume,
}: PipelineCardProps) {
  return (
    <div className="border shadow-md rounded-2xl p-4 bg-white hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{pipelineName}</h2>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "Succeeded"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Start:</strong> {new Date(startTime).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(endTime).toLocaleString()}</p>
        <p><strong>Duration:</strong> {duration}</p>
        {dataVolume && <p><strong>Data Volume:</strong> {dataVolume}</p>}
      </div>
    </div>
  );
}
