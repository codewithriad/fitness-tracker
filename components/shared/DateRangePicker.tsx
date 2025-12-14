
import React from 'react';

export const DateRangePicker: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <input type="date" className="border rounded p-1" />
      <span>to</span>
      <input type="date" className="border rounded p-1" />
    </div>
  );
};
