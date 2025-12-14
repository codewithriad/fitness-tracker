export type MuscleGroup = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms' | 'core' | 'cardio';
export type WorkoutType = 'strength' | 'hypertrophy' | 'endurance' | 'flexibility' | 'hiit';

export interface Set {
  id: string;
  reps: number;
  weight: number;
  rpe?: number;
  restPeriod?: number; // in seconds
  completed: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  sets: Set[];
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  date: Date;
  duration: number; // in minutes
  type: WorkoutType;
  exercises: Exercise[];
  notes?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
