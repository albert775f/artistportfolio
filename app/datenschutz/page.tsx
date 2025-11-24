import { getContent } from "@/lib/content";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DatenschutzPage() {
  const content = await getContent();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/">
          <Button variant="outline" className="mb-8 text-black hover:text-black">← Zurück zur Startseite</Button>
        </Link>
        <div className="prose prose-invert prose-zinc prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white max-w-none" dangerouslySetInnerHTML={{ __html: content.datenschutz }} />
      </div>
      <footer className="py-6 text-center text-zinc-500 border-t border-zinc-800 mt-12">
        <p className="mb-2">&copy; {new Date().getFullYear()} {content.artistName}. All rights reserved.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/datenschutz" className="hover:text-zinc-300 transition-colors">Datenschutz</Link>
          <Link href="/impressum" className="hover:text-zinc-300 transition-colors">Impressum</Link>
        </div>
      </footer>
    </div>
  );
}
