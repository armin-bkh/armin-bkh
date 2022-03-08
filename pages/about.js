import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="p-5 min-h-smHeight md:min-h-mdHeight main">
      <article className="leading-8 text-justify text-sm clear-both">
        <h1 className="text-3xl">
          My name is <span className="text-emerald-500">Armin Bakhshi</span>{" "}
          <div className="float-right">
            <Image
              className="drop-shadow-lg"
              src="/svg/me-char.svg"
              width={300}
              height={300}
              draggable={false}
            />
          </div>
          from Iran.
        </h1>
        <p>I am eighteen years old and I live in Tehran.</p>
        <p>I am a final year computer student.</p>
        <p>
          I am a front-end developer and have been working in the basin for
          almost a year.
        </p>
        <p>
          I work with the react Library. I am at the mid level and my projects
          can be seen on the{" "}
          <Link href="/projects">
            <a className="text-emerald-500">projects page</a>
          </Link>
        </p>
        <p>
          The reason for my interest in programming is its endless challenges. I
          am always interested in doing new things and eager to learn new
          things.
        </p>
        <p>
          Especially in teamwork where we all use and learn from each other's
          knowledge.
        </p>
      </article>
    </main>
  );
};

export default AboutPage;
