import { requireAuth } from '@/lib/dal';
import { getContent } from '@/lib/content';
import { logout } from '@/app/actions/auth';
import { Button } from '@/components/ui/button';
import { AdminForm } from '@/components/admin/admin-form';
import Link from 'next/link';


export const metadata = {
  title: 'Admin Dashboard - Artist Portfolio',
  description: 'Content Management System',
};

export default async function AdminPage() {
  await requireAuth();

  const content = await getContent();

  return (
    <div className="min-h-screen bg-zinc-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-zinc-400">Manage your artist portfolio content</p>
          </div>
          <div className="flex gap-4">
            <Link href="/" target="_blank">
              <Button variant="outline">
                View Site
              </Button>
            </Link>
            <form action={logout}>
              <Button type="submit" variant="outline">
                Logout
              </Button>
            </form>
          </div>
        </div>

        <AdminForm initialContent={content} />
      </div>
    </div>
  );
}
