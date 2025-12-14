import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';

  const login = () => router.push('/auth/login');
  const register = () => router.push('/auth/register');

  return {
    session,
    isLoading,
    isAuthenticated,
    user: session?.user,
    login,
    register,
  };
}
