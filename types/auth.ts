import { User as NextAuthUser } from 'next-auth';

export interface User extends NextAuthUser {
  id: string;
  role?: 'user' | 'admin' | 'trainer';
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme: 'dark' | 'light' | 'system';
  units: 'metric' | 'imperial';
  startOfWeek: 'monday' | 'sunday';
}

export interface AuthSession {
  user: User;
  expires: string;
}
