export interface BodyMeasurements {
  weight?: number;
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
  neck?: number;
}

export interface ProgressPhoto {
  id: string;
  url: string;
  type: 'front' | 'side' | 'back';
  date: Date;
}

export interface ProgressEntry {
  id: string;
  date: Date;
  measurements: BodyMeasurements;
  photos: ProgressPhoto[];
  notes?: string;
  userId: string;
}

export interface Goal {
  id: string;
  title: string;
  description?: string;
  targetDate: Date;
  targetValue: number;
  currentValue: number;
  unit: string;
  type: 'weight' | 'measurement' | 'performance' | 'habit';
  isCompleted: boolean;
  userId: string;
}
