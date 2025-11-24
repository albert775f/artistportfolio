import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'path';

export interface Content {
  artistName: string;
  subtitle: string;
  about: string;
  artistPhoto: string;
  albumCover: string;
  songFile: string;
  songTitle: string;
  youtubeVideoUrl: string;
  spotifyUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  datenschutz: string;
  impressum: string;
}

const contentPath = join(process.cwd(), 'data/content.json');

export async function getContent(): Promise<Content> {
  const file = await readFile(contentPath, 'utf8');
  return JSON.parse(file);
}

export async function updateContent(data: Content): Promise<void> {
  await writeFile(contentPath, JSON.stringify(data, null, 2));
}
