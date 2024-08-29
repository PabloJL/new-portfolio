function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden ">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
