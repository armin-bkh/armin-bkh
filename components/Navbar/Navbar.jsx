import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { GoHome } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { BsJournalCode } from "react-icons/bs";
import { RiUser2Fill } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";

const links = [
  { id: 1, title: "home", icon: <GoHome className="mr-1" />, href: "/" },
  {
    id: 2,
    title: "skills",
    icon: <GiSkills className="mr-1" />,
    href: "/skills",
  },
  {
    id: 3,
    title: "projects",
    icon: <BsJournalCode className="mr-1" />,
    href: "/projects",
  },
  {
    id: 4,
    title: "about",
    icon: <RiUser2Fill className="mr-1" />,
    href: "/about",
  },
  {
    id: 5,
    title: "contact",
    icon: <MdConnectWithoutContact className="mr-1" />,
    href: "/contact",
  },
];

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const navRef = useRef();

  useEffect(() => {
    function handleCloseNav(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        e.target.id !== "ham-menu"
      ) {
        setIsShow(false);
      }
    }

    document.addEventListener("mousedown", handleCloseNav);
    return () => {
      document.removeEventListener("mousedown", handleCloseNav);
    };
  }, [navRef]);

  return (
    <header className="flex items-center justify-between px-3 py-5 relative">
      <Link href="/">
        <a className="cursor-pointer text-3xl">
          ARMIN<span className="text-gray-500">-</span>
          <span className="text-emerald-500">BKH</span>
        </a>
      </Link>
      <nav
        ref={navRef}
        className={`z-10 transition-all fixed top-0 bottom-0 w-5/12 lg:w-auto ${
          isShow ? "right-0" : "-right-full"
        } flex items-center justify-center bg-slate-600 lg:bg-transparent lg:static`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center">
          {links.map((link) => (
            <li onClick={() => setIsShow(false)} key={link.id}>
              <Link href={link.href}>
                <a
                  className={`flex items-center px-5 py-2 text-base lg:text-base rounded-sm capitalize hover:text-emerald-500 transition ${
                    router.pathname === link.href &&
                    "text-emerald-500 bg-slate-600/50"
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
        id="ham-menu"
        className="lg:hidden h-10 z-50"
        onClick={() => {
          setIsShow((prevIsShow) => !prevIsShow);
        }}
      >
        <div
          id="ham-menu"
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "bg-gray-800 transform rotate-45" : "bg-slate-600"
          }`}
        ></div>
        <div
          id="ham-menu"
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "hidden" : "bg-slate-600"
          } my-1`}
        ></div>
        <div
          id="ham-menu"
          className={`h-1.5 w-8 rounded-sm transition-all ${
            isShow ? "bg-gray-800 transform -rotate-45 -mt-1.5" : "bg-slate-600"
          }`}
        ></div>
      </button>
    </header>
  );
};

export default Navbar;
