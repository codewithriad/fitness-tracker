export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface MacroNutrients {
  protein: number;
  carbs: number;
  fats: number;
}

export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  macros: MacroNutrients;
  servingSize: number;
  servingUnit: string;
}

export interface DailyNutritionLog {
  id: string;
  date: string;
  totalCalories: number;
  totalMacros: MacroNutrients;
  meals: Record<MealType, FoodItem[]>;
  waterIntake: number; // in ml
  userId: string;
}
