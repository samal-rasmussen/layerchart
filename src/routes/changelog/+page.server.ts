import * as fs from 'node:fs/promises';

export const prerender = true;

export async function load() {
  const changelog = await fs.readFile('./CHANGELOG.md', 'utf-8');

  return { changelog };
}
