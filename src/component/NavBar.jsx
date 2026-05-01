import { NavLink } from "react-router";

const NavBar = () => (
  <nav className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex justify-between items-center px-6 md:px-20 py-4 w-full">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <p className="text-xl font-bold text-gray-800">
        <span className="text-4xl">P</span>rajita
      </p>
    </div>

    {/* Menu */}
    <div>
      <ul className="flex space-x-4 md:space-x-6 font-medium text-gray-700">
        <li>
          <a href="#home" className="text-red-600">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-red-700 transform transition duration-200 hover:translate-x-1 hover:translate-y-1">About Me</a>
        </li>
        <li>
          <a href="#skill" className="hover:text-red-700 transform transition duration-200 hover:translate-x-1 hover:translate-y-1">Skill</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-red-700 transform transition duration-200 hover:translate-x-1 hover:translate-y-1">Projects</a>
        </li>
        <li>
          <a href="#services" className="hover:text-red-700 transform transition duration-200 hover:translate-x-1 hover:translate-y-1">Services</a>
        </li>
      </ul>
    </div>

    {/* Connect Button */}
    <div>
      <a
        href="#connect"
        className="border-2 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transform transition duration-200 hover:translate-x-1 hover:translate-y-1"
      >
        Connect
      </a>
    </div>
  </nav>
);

export default NavBar;