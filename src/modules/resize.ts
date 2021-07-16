import fs from 'fs';
import sharp, { AvailableFormatInfo } from 'sharp';

export function resize(
  path: string,
  format: string,
  width: number,
  height: number
) {
  const readStream = fs.createReadStream(path);
  let transform = sharp();
  if (format) {
    transform = transform.toFormat(format as unknown as AvailableFormatInfo);
  }

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
}
