function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-8 sm:px-12 lg:px-20 py-6
        text-white
      "
    >
      {/* NAME */}
      <span className="font-serif text-3xl tracking-wide">
        Hiwa Fareeq
      </span>

      {/* LINKS */}
      <ul className="flex gap-8 text-lg tracking-wide">
        <li className="hover:opacity-70 transition cursor-pointer">
          About
        </li>
        <li className="hover:opacity-70 transition cursor-pointer">
          Projects
        </li>
        <li className="hover:opacity-70 transition cursor-pointer">
          Experience
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
