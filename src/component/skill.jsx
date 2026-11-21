const skills = [
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "JavaScript", icon: "/java_script.png" },
  { name: "Python", icon: "/python.png" },
  { name: "Django", icon: "/django.png" },
  { name: "React", icon: "/React.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "C", icon: "/c_programming.png" },
];

const Skill = () => (
  <section
    id="skill"
    className="px-6 md:px-12 lg:px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 min-h-screen py-16 rounded-xl"
  >
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-16">
      Skills
    </p>

    <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center w-28">
          <img
            className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
            src={skill.icon}
            alt={skill.name}
          />
          <p className="mt-3 font-medium text-gray-700 text-center">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Skill;