
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Vite",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Skills</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            These are the main technologies and tools I use to build modern
            frontend applications.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-xl border border-gray-200 bg-white px-5 py-6 text-center font-semibold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;