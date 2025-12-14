import { useEffect, useState } from 'react';
import { apiClient } from '../api-client';

export interface ProgressEntry {
  id: string;
  date: string;
  weight?: number;
  bodyFatPercentage?: number;
  measurements?: Record<string, number>; // e.g., { chest: 100, waist: 80 }
  photos?: string[];
}

export function useProgress() {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    try {
      setIsLoading(true);
      const data = await apiClient.get<ProgressEntry[]>('/progress');
      setEntries(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch progress'));
    } finally {
      setIsLoading(false);
    }
  }

  async function addEntry(entryData: Omit<ProgressEntry, 'id'>) {
    try {
      const newEntry = await apiClient.post<ProgressEntry>('/progress', entryData);
      setEntries((prev) => [newEntry, ...prev]);
      return newEntry;
    } catch (err) {
      throw err;
    }
  }

  return {
    entries,
    isLoading,
    error,
    addEntry,
    refetch: fetchEntries,
  };
}
