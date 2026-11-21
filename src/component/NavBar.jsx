import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skill", label: "Skill" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 w-full">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <p className="text-xl font-bold text-gray-800">
          <span className="text-4xl">P</span>rajita
        </p>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-red-700 transition duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Connect button */}
        <a
          href="#connect"
          className="hidden md:inline-block border-2 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-200"
        >
          Connect
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-6 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-red-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#connect"
              onClick={() => setOpen(false)}
              className="border-2 border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white"
            >
              Connect
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;