import { resize } from '../modules/resize';
import { promises as fs } from 'fs';

describe('Test resizing function', () => {
  let filename = 'palmtunnel';
  let width = 100;
  let height = 100;
  it('checks for input file present', async () => {
    let accessSpy = spyOn(fs, 'access');
    await resize(filename, width, height);
    expect(accessSpy).toHaveBeenCalled();
  });
  it('writes new file to thumbs', async () => {
    let writeSpy = spyOn(fs, 'writeFile');
    await resize(filename, width, height);
    expect(writeSpy).toHaveBeenCalled();
  });
  it('gives error when input file not present', async () => {
    filename = 'abc';
    expect(await resize(filename, width, height)).toThrowError;
  });
});
