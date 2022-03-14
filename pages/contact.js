import EmailForm from "components/EmailForm/EmailForm";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

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

const ContactPage = () => {
  return (
    <main className="main min-h-smHeight md:min-h-mdHeight p-5">
      <section>
        <ul className="flex flex-wrap gap-5">
          <li className="w-full flex flex-col justify-center items-center text-xl md:text-3xl">
            <AiOutlineMail /> arminbkh0921@yahoo.com
          </li>
          {socialMedia.map((link) => (
            <li
              className="flex-1 flex justify-center items-center text-xl md:text-3xl"
              key={link.href}
            >
              <a
                className="cursor-pointer hover:text-emerald-500 transition"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                draggable={false}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <Image
            className="mx-auto drop-shadow-xl"
            src="/svg/contact.svg"
            width={420}
            height={420}
          />
        </div>
      </section>
      {/* <EmailForm /> */}
    </main>
  );
};

export default ContactPage;
