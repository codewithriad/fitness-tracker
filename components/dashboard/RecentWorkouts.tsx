
import React from 'react';

export const RecentWorkouts: React.FC = () => {
  return (
    <div className="border rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Recent Workouts</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-500">No recent workouts</p>
        {/* List of recent workouts */}
      </div>
    </div>
  );
};
