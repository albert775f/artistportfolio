import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/lib/content";
import Link from "next/link";

export default async function Home() {
  const content = await getContent();

  import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return {
    title: `${content.artistName} - ${content.subtitle}`,
    description: content.about.substring(0, 160),
  };
}

const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const youtubeEmbedUrl = content.youtubeVideoUrl ? getYouTubeEmbedUrl(content.youtubeVideoUrl) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
              <Image src={content.artistPhoto} alt={content.artistName} fill className="object-cover" priority />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {content.artistName}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">{content.subtitle}</p>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <Button asChild variant="outline" size="default" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
                <a href={content.spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  Spotify
                </a>
              </Button>
              <Button asChild variant="outline" size="default" className="bg-red-600 hover:bg-red-700 text-white border-red-600">
                <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
              </Button>
              <Button asChild variant="outline" size="default" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-purple-600">
                <a href={content.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          {(youtubeEmbedUrl || content.songFile) && (
            <Card className="bg-zinc-800/50 border-zinc-700 mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">Latest Track</h2>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={content.albumCover} alt={content.songTitle} fill className="object-cover" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-center md:text-left text-white">{content.songTitle}</h3>
                    {youtubeEmbedUrl ? (
                      <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <iframe width="100%" height="100%" src={youtubeEmbedUrl} title={content.songTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                      </div>
                    ) : (
                      <audio controls className="w-full">
                        <source src={content.songFile} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-zinc-800/50 border-zinc-700 mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">About</h2>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed">{content.about}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-6 text-center text-zinc-500 border-t border-zinc-800">
        <p className="mb-2">&copy; {new Date().getFullYear()} {content.artistName}. All rights reserved.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/datenschutz" className="hover:text-zinc-300 transition-colors">Datenschutz</Link>
          <Link href="/impressum" className="hover:text-zinc-300 transition-colors">Impressum</Link>
        </div>
      </footer>
    </div>
  );
}
