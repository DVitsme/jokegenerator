import Link from 'next/link';

function Tile({ category, index }: { category: string; index: number }) {
  return (
    <Link href={`/${category}`}>
      <div className="relative">
        <div className="lg:aspect-h-4 lg:aspect-w-2 h-60 w-full overflow-hidden rounded-lg">
          <img
            src={`/images/${category}.jpg`}
            alt="Drawstring top with elastic loop closure and textured interior padding."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <p className="absolute bottom-5 left-5 text-2xl font-bold text-white">
          {category} Jokes
        </p>
      </div>
    </Link>
  );
}

export default async function Tiles({ categories }: { categories: string[] }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Get Cha' Jokes Here
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Below are a few categories to generate joke from, go ahead and
              select one.
            </p>
          </div>
          <div
            className={`mt-16 grid grid-cols-1 lg:grid-cols-4 gap-y-16 lg:gap-x-8`}
          >
            {categories.map((category, index) => (
              <Tile key={index} index={index} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
