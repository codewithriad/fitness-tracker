
import React from 'react';

interface EmptyStateProps {
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message = 'No data available' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500">
      <p>{message}</p>
    </div>
  );
};
