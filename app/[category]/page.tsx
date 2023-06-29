'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { getJokes } from '@/utils/getJoke';

import Grid from '../components/Grid';
import { useBearStore } from '@/store';

export default async function Category() {
  const pathname = usePathname();
  const queryString = pathname.charAt(0) === '/' ? pathname.slice(1) : null;
  //@ts-ignore It is trying to save me from entering in an improper string but i got that, better fix inc
  const joke = await getJokes(queryString);
  if (joke.error) return <div>I am in Error</div>;
  return (
    <div className="mx-auto container">
      <button onClick={() => useBearStore.increasePopulation()}>
        Up bears
      </button>
      <p>{useBearStore.bears}</p>
      {pathname}
      <Grid />
    </div>
  );
}
// 8007622035
