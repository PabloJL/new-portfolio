import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const MenuIcon = () => (
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M5 7h14M5 12h14M5 17h14"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18 17.94 6M18 18 6.06 6"
    />
  </svg>
);

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Menu() {
  const [status, setStatus] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-2">
        <a
          href={"/"}
          className=" text-2xl md:text-5xl text-white font-semibold p-5"
        >
          Jπ
        </a>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setStatus(!status)}
            className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
          >
            {status ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="block text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white py-2 pl-3 pr-4"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {status ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
