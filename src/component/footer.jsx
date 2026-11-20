const Footer = () => (
  <footer className="px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800">
    <hr />

    <div className="flex p-5 justify-center">
      <div className="flex justify-center space-x-6 pt-3 text-gray-800 text-xl">
        <a
          href="https://www.linkedin.com/in/Prajita Bhattarai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Praj1ta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-black"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="mailto:prajubhattarai2@gmail.com"
          aria-label="Email"
          className="hover:text-red-500"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>

    <div className="text-center text-sm text-gray-500 mt-2">
      Contact:{" "}
      <a
        href="mailto:prajubhattarai2@gmail.com"
        className="text-blue-600 hover:underline"
      >
        prajubhattarai2@gmail.com
      </a>
    </div>

    <p className="text-center pb-24 mt-2">
      &copy; 2026 Prajita Bhattarai
    </p>
  </footer>
);

export default Footer;