import { Categories } from '@/types/Categories';
import { Joke } from '@/types/Jokes';

export async function getJokes(type: Categories) {
  const res = await fetch(`https://v2.jokeapi.dev/joke/${type}`);
  if (!res.ok) {
    throw new Error('failed to get jokes');
  }
  return (await res.json()) as Joke;
}
