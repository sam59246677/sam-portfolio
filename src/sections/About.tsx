
function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            I build modern and responsive frontend applications.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a frontend developer focused on building responsive,
            user-friendly web applications with React and TypeScript. I enjoy
            turning ideas and designs into clean, functional, and accessible
            interfaces.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            I focus on writing clean and maintainable code, building reusable
            components, and creating interfaces that provide a consistent
            experience across mobile, tablet, and desktop devices.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            My current focus is React, TypeScript, and Tailwind CSS, while
            continuously improving my frontend development skills through
            practical projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">
              Responsive
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Interfaces designed to work smoothly across mobile, tablet, and
              desktop screen sizes.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">
              Component-Based
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Reusable React components that keep applications organized,
              readable, and easier to maintain.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">
              Type-Safe
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              TypeScript helps make the code more predictable and reduces
              common development errors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
