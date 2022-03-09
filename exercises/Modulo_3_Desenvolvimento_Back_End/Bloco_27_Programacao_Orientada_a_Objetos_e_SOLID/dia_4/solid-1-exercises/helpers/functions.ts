import fs from 'fs/promises';

export const read = async (path: string) => {
  const data = await fs.readFile(path, 'utf8');
  const file = JSON.parse(data);
  return file;
};

export const write = async (path: string, message: string) => {
  const data = await read(path);
  const file = JSON.parse(data);
  const newFile = await fs.writeFile(file, JSON.stringify(message));
  return newFile;
};