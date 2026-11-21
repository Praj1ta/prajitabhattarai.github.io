const education = [
  {
    id: 1,
    degree: "BSc in Computer Science and Information Technology (BSc CSIT)",
    institution: "Birat kshitiz College",
    university: "Tribhuwan University",
    years: "2023 - Present",
    note: "Currently in the 5th semester. ",
  },
];

const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Artificial Intelligence",
  "Operating Systems",
  "Computer Networks",
];

const Education = () => (
  <section
    id="education"
    className="px-6 md:px-12 lg:px-[100px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 py-16"
  >
    <p className="text-center text-4xl md:text-6xl font-semibold text-gray-800 mb-12">
      Education
    </p>

    <div className="max-w-3xl mx-auto space-y-6">
      {education.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
          <p className="text-gray-700 mt-1">{item.institution}</p>
          <p className="text-gray-600 text-sm">{item.university}</p>
          <p className="text-red-600 text-sm font-medium mt-2">{item.years}</p>
          <p className="text-gray-600 text-sm mt-2">{item.note}</p>
        </div>
      ))}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Relevant Courses
        </h3>
        <div className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <span
              key={course}
              className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;