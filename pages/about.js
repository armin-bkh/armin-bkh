import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const movies = [
  { id: 1, name: 'scent of a woman' },
  { id: 2, name: 'interstellar' },
  { id: 3, name: 'the shawshank redemption' },
];

const series = [
  { id: 1, name: 'the walking dead' },
  { id: 2, name: 'game of thrones' },
  { id: 3, name: 'stranger things' },
];

const recreation = [
  { id: 1, name: 'video game' },
  { id: 2, name: 'coding' },
  { id: 3, name: 'football' },
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>armin-bkh: About</title>
      </Head>
      <main className="p-5 min-h-smHeight md:min-h-mdHeight main">
        <section className="mb-20">
          <article className="leading-8 text-justify text-sm clear-both">
            <h1 className="text-2xl md:text-3xl">
              My name is <span className="text-emerald-500">Armin Bakhshi</span>{' '}
            </h1>
            <div className="flex justify-center md:float-right">
              <Image
                className="drop-shadow-lg"
                src="/svg/me-char.svg"
                width={290}
                height={290}
                draggable={false}
                alt="about me"
                priority
              />
            </div>
            <p>I am eighteen years old, born in 2004 May 30th - 5/30/2004 (solar: 1383/3/10).</p>
            <p>I live in Tehran.</p>
            <p>
              I am a front-end developer and have been working in the basin for almost two years.
            </p>
            <p>
              I work with the react Library. I am at the mid level and my projects can be seen on
              the{' '}
              <Link href="/projects">
                <a className="text-emerald-500">projects</a>
              </Link>{' '}
              page
            </p>
            <p>
              The reason for my interest in programming is its endless challenges. I am always
              interested in doing new things and eager to learn new things.
            </p>
            <p>
              Especially in teamwork where we all use and learn from each other&apos;s knowledge.
            </p>
          </article>
        </section>
        <h1 className="text-center text-3xl md:text-5xl mb-5">My favorites</h1>
        <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
          <div className="flex flex-col items-center">
            <h5 className="mb-2 text-lg md:text-2xl text-emerald-500 capitalize">movies</h5>
            <ul className="list-disc uppercase text-sm w-9/12 sm:w-4/12 md:w-8/12">
              {movies.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-2 text-lg md:text-2xl text-emerald-500 capitalize">series</h5>
            <ul className="list-disc uppercase text-sm w-9/12 sm:w-4/12 md:w-8/12">
              {series.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-2 text-lg md:text-2xl text-emerald-500 capitalize">recreation</h5>
            <ul className="list-disc uppercase text-sm w-9/12 sm:w-4/12 md:w-8/12">
              {recreation.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
