import { useEffect, useState } from 'react';
import * as z from 'zod';
import { apiClient } from '../api-client';
import { workoutSchema } from '../validations';

type Workout = z.infer<typeof workoutSchema> & { id: string; createdAt: Date };

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  async function fetchWorkouts() {
    try {
      setIsLoading(true);
      const data = await apiClient.get<Workout[]>('/workouts');
      setWorkouts(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch workouts'));
    } finally {
      setIsLoading(false);
    }
  }

  async function addWorkout(workoutData: z.infer<typeof workoutSchema>) {
    try {
      const newWorkout = await apiClient.post<Workout>('/workouts', workoutData);
      setWorkouts((prev) => [newWorkout, ...prev]);
      return newWorkout;
    } catch (err) {
      throw err;
    }
  }

  return {
    workouts,
    isLoading,
    error,
    addWorkout,
    refetch: fetchWorkouts,
  };
}
