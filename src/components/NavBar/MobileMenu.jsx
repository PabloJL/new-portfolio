import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const MenuIcon = () => {
  return (
    <svg
      className="w-5 h-5 "
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
};

const CloseIcon = () => {
  return (
    <svg
      className="w-5 h-5 "
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
};

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

export default function MobileMenu() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <div className="mobile-menu block md:hidden">
        {status ? (
          <button
            onClick={() => setStatus(false)}
            className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            onClick={() => setStatus(true)}
            className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
          >
            <MenuIcon />
          </button>
        )}
      </div>
      {status ? <MenuOverlay links={navLinks} /> : null}
    </div>
  );
}
