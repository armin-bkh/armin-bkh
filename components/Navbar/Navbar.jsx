import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { BsJournalCode } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";

const links = [
  { id: 1, title: "home", icon: <GoHome className="mr-1"/>, href: "/" },
  { id: 2, title: "skills", icon: <GiSkills className="mr-1"/>, href: "/skills" },
  { id: 3, title: "projects", icon: <BsJournalCode className="mr-1"/>, href: "/projects" },
  {
    id: 4,
    title: "contact us",
    icon: <MdConnectWithoutContact className="mr-1"/>,
    href: "/contact",
  },
];

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-3 py-5">
      <Link href="/">
        <a className="cursor-pointer text-3xl">
          ARMIN<span className="text-gray-500">-</span>
          <span className="text-emerald-500">BKH</span>
        </a>
      </Link>
      <nav
        className={`transition-all fixed top-0 bottom-0 w-5/12 md:w-auto ${
          isShow ? "right-0" : "-right-full"
        } flex items-center justify-center bg-slate-600 md:bg-transparent md:relative`}
      >
        <ul className="flex  flex-col md:flex-row md:items-center">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>
                <a
                  className={`flex items-center px-5 py-2 text-xl md:text-base rounded-sm capitalize hover:text-emerald-500 transition ${
                    router.pathname === link.href &&
                    "text-emerald-500 bg-slate-600"
                  }`}
                >
                  {link.icon}
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="md:hidden z-50"
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
      >
        <div
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "bg-gray-800 transform rotate-45" : "bg-slate-600"
          }`}
        ></div>
        <div
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "hidden" : "bg-slate-600"
          } my-1`}
        ></div>
        <div
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "bg-gray-800 transform -rotate-45 -mt-1.5" : "bg-slate-600"
          }`}
        ></div>
      </button>
    </header>
  );
};

export default Navbar;
