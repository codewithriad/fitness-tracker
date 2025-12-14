
import React from 'react';

interface GoalCardProps {
  className?: string;
}

export const GoalCard: React.FC<GoalCardProps> = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h3>Goal Card</h3>
    </div>
  );
};
