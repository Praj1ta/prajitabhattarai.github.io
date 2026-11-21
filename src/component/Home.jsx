
import { PrimaryButton } from "./button";


const Home = () => (
  <>
    
    <main
      id="home"
      className="px-6 md:px-12 lg:px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center justify-evenly min-h-screen py-16 md:py-0 md:flex-row md:space-y-0"
    >
      <div className="mt-10 md:mt-36 space-y-5 text-center md:text-left">
        <p>
          <span className="text-4xl md:text-5xl text-gray-800 font-medium">
            Hey, This is
          </span>
          <br />
          <span className="text-5xl md:text-6xl text-gray-800 font-bold">
            Prajita <span className="text-red-600">Bh</span>attarai
          </span>
        </p>

        <p className="text-xl md:text-2xl text-gray-700 font-light">
          an interactive Web Developer
        </p>

        <div className="space-x-5">
          <PrimaryButton label="Let's Talk" />
        </div>

        <div className="flex justify-center md:justify-start space-x-5 pt-3 text-gray-600 text-xl">
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
    href="https://www.linkedin.com/in/Prajita Bhattarai"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-blue-600"
  >
    <i className="fa-brands fa-linkedin"></i>
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

      <div className="flex flex-col items-center mt-10 md:mt-0">
        <div>
          <img
            className="rounded-full w-64 h-64 shadow-lg hover:scale-105 transition-transform duration-300"
            src="/girlimge.png"
            alt=""
          />
        </div>

        <p className="max-w-md text-justify text-gray-700 text-sm mt-6 px-6">
          “Hi! I’m Prajita Bhattarai, a budding front-end developer passionate
          about building interactive and user-friendly web interfaces.”
        </p>
      </div>
    </main>
    
  </>
);

export default Home;