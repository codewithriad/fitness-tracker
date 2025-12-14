import { useEffect, useState } from 'react';
import { apiClient } from '../api-client';

export interface NutritionLog {
  id: string;
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foods: string[];
}

export function useNutrition() {
  const [logs, setLogs] = useState<NutritionLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      setIsLoading(true);
      const data = await apiClient.get<NutritionLog[]>('/nutrition');
      setLogs(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch nutrition logs'));
    } finally {
      setIsLoading(false);
    }
  }

  async function addLog(logData: Omit<NutritionLog, 'id'>) {
    try {
      const newLog = await apiClient.post<NutritionLog>('/nutrition', logData);
      setLogs((prev) => [newLog, ...prev]);
      return newLog;
    } catch (err) {
      throw err;
    }
  }

  return {
    logs,
    isLoading,
    error,
    addLog,
    refetch: fetchLogs,
  };
}
