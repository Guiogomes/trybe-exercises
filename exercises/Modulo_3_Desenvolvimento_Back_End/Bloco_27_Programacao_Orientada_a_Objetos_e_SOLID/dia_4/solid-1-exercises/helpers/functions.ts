import fs from 'fs/promises';

export const read = async (path: string) => {
  const file = await fs.readFile(path, 'utf8');
  return file;
};

export const write = async (path: string, message: string) => {
  const file = await read(path);
  const newFile = await fs.writeFile(file, message);
  return newFile;
};