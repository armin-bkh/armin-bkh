// import EmailForm from "components/EmailForm/EmailForm";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";

const socialMedia = [
  {
    id: 1,
    href: "https://www.github.com/armin-bkh",
    icon: <FaGithub className="pr-2 text-xl" />,
    title: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/arminbkh",
    icon: <FaLinkedinIn className="pr-2 text-xl" />,
    title: "LinkedIn",
  },
  {
    id: 3,
    href: "https://www.instagram.com/rminbkh/",
    icon: <FaInstagram className="pr-2 text-xl" />,
    title: "instagram",
  },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>armin-bkh: Contact</title>
      </Head>
      <main className="main min-h-smHeight md:min-h-mdHeight p-5">
        <section>
          <ul className="flex flex-wrap gap-5">
            <li className="w-full flex flex-col justify-center items-center text-xl md:text-3xl">
              <AiOutlineMail /> arminbkh0921@yahoo.com
            </li>
            {socialMedia.map((link) => (
              <li
                className="flex-1 flex justify-center items-center text-lg"
                key={link.id}
              >
                <a
                  className={`cursor-pointer transition-all flex items-center rounded-md px-3 py-1 ${
                    link.id === 1
                      ? "bg-black"
                      : link.id === 2
                      ? "bg-[#0072b1]"
                      : "bg-gradient-to-tr from-yellow-200 via-[#fb3958] to-[#458eff]"
                  }`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <Image
              className="mx-auto drop-shadow-xl"
              src="/svg/contact.svg"
              alt="contact image"
              draggable={false}
              width={420}
              height={420}
            />
          </div>
        </section>
        {/* <EmailForm /> */}
      </main>
    </>
  );
};

export default ContactPage;
