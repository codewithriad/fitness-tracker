import * as z from 'zod';

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const userNameSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const goalSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  targetDate: z.string().or(z.date()),
  targetValue: z.number().min(1),
  currentValue: z.number().default(0),
  unit: z.string().min(1, 'Unit is required'),
});

export const workoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  date: z.string().or(z.date()),
  duration: z.number().min(1, 'Duration must be at least 1 minute'),
  type: z.string(),
  notes: z.string().optional(),
});
