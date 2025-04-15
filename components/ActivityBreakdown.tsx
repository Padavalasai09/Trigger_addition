import React from "react";

interface Activity {
  name: string;
  status: string;
  start: string;
  end: string;
  duration: string;
  errorMessage?: string;
  dataVolume?: string;
}

interface Props {
  activities: Activity[];
}

export default function ActivityBreakdown({ activities }: Props) {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Activity Breakdown</h2>
      {activities.length === 0 ? (
        <p className="text-gray-600">No activities found for this run.</p>
      ) : (
        activities.map((activity, idx) => (
          <div
            key={idx}
            className="bg-white p-4 border rounded-xl shadow-sm space-y-2"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{activity.name}</h3>
              <span
                className={`text-sm font-medium ${
                  activity.status === "Succeeded"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {activity.status}
              </span>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Start:</strong> {new Date(activity.start).toLocaleString()}</p>
              <p><strong>End:</strong> {new Date(activity.end).toLocaleString()}</p>
              <p><strong>Duration:</strong> {activity.duration}</p>
              {activity.dataVolume && <p><strong>Data Volume:</strong> {activity.dataVolume}</p>}
              {activity.errorMessage && (
                <p className="text-red-600"><strong>Error:</strong> {activity.errorMessage}</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
