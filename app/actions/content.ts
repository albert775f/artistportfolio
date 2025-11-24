'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { getContent, updateContent } from '@/lib/content';
import { requireAuth } from '@/lib/dal';

const contentSchema = z.object({
  artistName: z.string().min(1, 'Artist name is required'),
  subtitle: z.string().min(1, 'Subtitle is required'),
  about: z.string().min(1, 'About text is required'),
  artistPhoto: z.string(),
  albumCover: z.string(),
  songFile: z.string(),
  songTitle: z.string().min(1, 'Song title is required'),
  spotifyUrl: z.string().url('Must be a valid URL'),
  youtubeUrl: z.string().url('Must be a valid URL'),
  instagramUrl: z.string().url('Must be a valid URL'),
});

export async function updateContentAction(formData: FormData) {
  await requireAuth();
  
  const data = {
    artistName: formData.get('artistName') as string,
    subtitle: formData.get('subtitle') as string,
    about: formData.get('about') as string,
    artistPhoto: formData.get('artistPhoto') as string,
    albumCover: formData.get('albumCover') as string,
    songFile: formData.get('songFile') as string,
    songTitle: formData.get('songTitle') as string,
    spotifyUrl: formData.get('spotifyUrl') as string,
    youtubeUrl: formData.get('youtubeUrl') as string,
    instagramUrl: formData.get('instagramUrl') as string,
  };
  
  try {
    const validated = contentSchema.parse(data);
    await updateContent(validated);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: 'Failed to update content' };
  }
}

export async function getContentAction() {
  return await getContent();
}
