
import React from 'react';
import { GoalCard } from './GoalCard';

export const GoalList: React.FC = () => {
  return (
    <div className="grid gap-4">
      <h3>Goal List</h3>
      <GoalCard />
      {/* Map through goals and render GoalCard */}
    </div>
  );
};
