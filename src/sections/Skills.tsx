
const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "JavaScript"],
  },
  {
    title: "UI & Styling",
    skills: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Vite", "Git & GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            The main technologies and tools I use to build modern,
            responsive frontend applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
