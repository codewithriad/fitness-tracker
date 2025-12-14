
import React from 'react';

export const QuickActions: React.FC = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Log Workout</button>
      <button className="px-4 py-2 bg-green-600 text-white rounded">Add Meal</button>
    </div>
  );
};
