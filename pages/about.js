import Image from "next/image";
import Link from "next/link";

const movies = [
  { id: 1, img: "/images/scent-of-a-woman.jpg", name: "scent of a woman" },
  { id: 2, img: "/images/interstellar.jpg", name: "interstellar" },
  {
    id: 3,
    img: "/images/the-dark-knight.jpg",
    name: "batman: the dark knight",
  },
];

const AboutPage = () => {
  return (
    <main className="p-5 min-h-smHeight md:min-h-mdHeight main">
      <section className="mb-20">
        <article className="leading-8 text-justify text-sm clear-both">
          <div className="float-right">
            <Image
              className="drop-shadow-lg"
              src="/svg/me-char.svg"
              width={290}
              height={290}
              draggable={false}
              alt="about me"
            />
          </div>
          <h1 className="text-3xl">
            My name is <span className="text-emerald-500">Armin Bakhshi</span>{" "}
            from Iran.
          </h1>
          <p>
            I am eighteen years old, born in 2004 May 30, sunday - 2004-50-30
            (solar: 1383/3/10).
          </p>
          <p>I live in Tehran.</p>
          <p>I am a final year computer student.</p>
          <p>
            I am a front-end developer and have been working in the basin for
            almost a year.
          </p>
          <p>
            I work with the react Library. I am at the mid level and my projects
            can be seen on the{" "}
            <Link href="/projects">
              <a className="text-emerald-500">projects</a>
            </Link>{" "}
            page
          </p>
          <p>
            The reason for my interest in programming is its endless challenges.
            I am always interested in doing new things and eager to learn new
            things.
          </p>
          <p>
            Especially in teamwork where we all use and learn from each
            other&apos;s knowledge.
          </p>
        </article>
      </section>
      {/* <h1 className="text-center text-3xl md:text-5xl mb-5">
        My favorite movies
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {movies.map((movie) => (
          <figure className="rounded-md" key={movie.id}>
            <div className="relative w-full h-[450px] rounded-t-md overflow-hidden">
              <Image src={movie.img} alt={movie.name} layout="fill" />
            </div>
            <figcaption className="overflow-hidden rounded-b-md shadow-md border-x border-b border-emerald-500/50 shadow-emerald-500/20 p-2 text-center text-xl uppercase">
              {movie.name}
            </figcaption>
          </figure>
        ))}
      </section>
      <h1 className="text-center text-3xl md:text-5xl mb-5">
        My favorite books
      </h1> */}
    </main>
  );
};

export default AboutPage;
