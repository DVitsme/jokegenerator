'use client';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Tiles from './components/Tiles';
import CTA from './components/CTA';
import { getJokes } from '@/utils/getJoke';
import { Categories } from '@/types/Categories';

export default async function Home() {
  const categories = ['Programming', 'Miscellaneous', 'Pun', 'Spooky'];
  return (
    <div className="test">
      <Hero />
      <Quote />
      <Tiles categories={categories} />
      <CTA />
    </div>
  );
}
