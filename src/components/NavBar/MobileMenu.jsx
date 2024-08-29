import useState from "react";

const MenuIcon = () => {
  <svg
    class="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="M5 7h14M5 12h14M5 17h14"
    />
  </svg>;
};

const CloseIcon = () => {
  <svg
    class="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18 17.94 6M18 18 6.06 6"
    />
  </svg>;
};

export default function MobileMenu() {
  const [status, setStatus] = useState(false);
  return (
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
      {/* {status ? <MenuOverlay links={navLinks} /> : null} */}
    </div>
  );
}
