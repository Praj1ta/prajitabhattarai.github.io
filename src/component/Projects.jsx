const projects = [
   {
    id: 1,
    title: "Digital Clock",
    image: "/clock.JPG",
    alt: "Screenshot of the Digital Clock project",
    description:
      "A digital clock that shows the current time, AM/PM, and the current day of the week.",
    tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    code: "https://github.com/Praj1ta/digital-clock",
    live: " https://praj1ta.github.io/digital-clock/",
  },
  {
    id: 2,
    title: "Calculator",
    image: "/calc.JPG",
    alt: "Screenshot of the Calculator project",
    description:
      "A calculator that performs basic arithmetic operations with a clean, easy-to-use layout.",
    tools: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Praj1ta/YOUR-CALCULATOR-REPO",
    live: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/portfolio.JPG",
    alt: "Screenshot of this portfolio website",
    description:
      "My personal portfolio: a responsive site with skills, projects, and a working contact form.",
    tools: ["React", "Vite", "Tailwind CSS"],
    code: "https://github.com/Praj1ta/prajitabhattarai.github.io",
    live: "https://prajitabhattarai.com.np",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="px-6 md:px-12 lg:px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min-h-screen md:p-16"
  >
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
      My Projects
    </p>

    <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 pb-12">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-center">{project.title}</h3>
          <p className="text-gray-600 text-sm mt-2 text-center">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4 pt-2 text-sm font-medium">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 hover:underline"
              >
                <i className="fa-brands fa-github"></i> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 hover:underline"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;