'use server';

import { writeFile } from 'node:fs/promises';
import { join } from 'path';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const type = formData.get('type') as string;
    
    if (!file) {
      return { error: 'No file provided' };
    }
    
    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return { error: 'File too large (max 10MB)' };
    }
    
    // Validate file type
    if (type === 'image') {
      if (!file.type.startsWith('image/')) {
        return { error: 'File must be an image' };
      }
    } else if (type === 'audio') {
      if (!file.type.startsWith('audio/')) {
        return { error: 'File must be an audio file' };
      }
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate safe filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}-${safeName}`;
    
    const path = join(process.cwd(), 'public', 'uploads', filename);
    await writeFile(path, buffer);
    
    return { success: true, path: `/uploads/${filename}` };
  } catch (error: any) {
    console.error('Upload error:', error);
    return { error: error?.message || 'Failed to upload file' };
  }
}
