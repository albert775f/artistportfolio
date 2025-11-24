'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password') as string;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  
  console.log('Login attempt');
  console.log('Received password:', password);
  console.log('Expected password:', expectedPassword);
  console.log('Match:', password === expectedPassword);
  
  if (password === expectedPassword) {
    console.log('Setting cookie...');
    const cookieStore = await cookies();
    cookieStore.set('admin-session', 'authenticated', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    console.log('Cookie set, redirecting...');
    redirect('/admin');
  }
  
  console.log('Invalid password, redirecting to login with error');
  redirect('/admin/login?error=1');
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
  redirect('/admin/login');
}
