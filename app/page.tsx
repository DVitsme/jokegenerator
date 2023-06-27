import { Joke } from '@/types/Jokes';

async function getJokes() {
  const res = await fetch('https://v2.jokeapi.dev/joke/Any');
  if (!res.ok) {
    throw new Error('failed to get jokes');
  }
  return res.json();
}

export default async function Home() {
  const joke = (await getJokes()) as Joke;
  console.log(joke);
  return (
    <div className="test">
      <h1>I live!!!!</h1>
      {joke.type === 'twopart' ? (
        <div>
          {joke.setup} - {joke.delivery}
        </div>
      ) : (
        <p>One part</p>
      )}
    </div>
  );
}
