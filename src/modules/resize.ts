import { promises as fs } from 'fs';
import sharp from 'sharp';

export async function resize(filename: string, width: number, height: number) {
  const inpath: string = `assets/original/${filename}.jpg`;
  const cachepath: string = `assets/thumbs/${filename}_${width}_${height}.jpg`;

  try {
    await fs.access(cachepath);
    console.log('Serving pre-processed image');
    return cachepath;
  } catch {
    let transform = sharp(inpath);
    if (width || height) {
      transform = transform.resize(width, height);
    }
    const file = transform.resize(width, height).toFormat('jpg').toBuffer();
    try {
      console.log('Caching image');
      await fs.writeFile(cachepath, await file);
      return cachepath;
    } catch (error) {
      console.log(`Cache failed:${error}`);
    }
  }
}
