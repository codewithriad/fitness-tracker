
import React from 'react';

export const StreakDisplay: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow text-center">
      <h3 className="text-lg font-bold">Current Streak</h3>
      <p className="text-3xl text-orange-500">🔥 0 Days</p>
    </div>
  );
};
