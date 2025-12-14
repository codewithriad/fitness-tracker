import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

// Helper to get session user (placeholder for server-side usage)
// In a real app, this would use getServerSession from next-auth/next
// and the authOptions.
