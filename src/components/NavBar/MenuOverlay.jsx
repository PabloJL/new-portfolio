function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, index) => (
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
  );
}

export default MenuOverlay;
