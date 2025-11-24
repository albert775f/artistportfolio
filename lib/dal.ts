import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin-session');
  return session?.value === 'authenticated';
}

export async function requireAuth() {
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    redirect('/admin/login');
  }
}
