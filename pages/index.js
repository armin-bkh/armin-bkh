import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    href: "https://www.github.com/armin-bkh",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/arminbkh",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/rminbkh/",
    icon: <FaInstagram />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row p-5 min-h-smHeight md:min-h-mdHeight main">
      <div className="flex flex-col justify-start items-center relative">
        <h1
          className="absolute w-24 -top-8 md:left-10 md:-top-12 sm:text-9xl left-5 self-start
          text-7xl uppercase"
        >
          hi there
        </h1>
        <span
          className="absolute top-0 left-28 sm:left-36 sm:top-5 sm:text-lg md:top-4
          md:left-52 md:text-2xl text-emerald-500"
        >
          My name is Armin
        </span>
        <Image
          draggable={false}
          className="drop-shadow-xl"
          src="/images/me.png"
          alt="hi there its me"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-10 md:mt-0 flex flex-col justify-center items-center flex-1">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Front-End Developer
        </h1>
        <p className="text-center text-sm md:text-base">
          this is my personal website and you will get know me
        </p>
        <nav className="mt-10 mb-5">
          <ul className="flex items-center">
            {socialMedia.map((link) => (
              <li className="text-lg md:text-xl mx-7" key={link.href}>
                <a
                  className="cursor-pointer hover:text-emerald-500 transition"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="cursor-pointer bg-emerald-500 text-sm md:text-base text-gray-700
          py-2 px-10 rounded-md transition shadow-lg shadow-emerald-500/40"
        >
          download my resume
        </a>
      </div>
    </main>
  );
}
