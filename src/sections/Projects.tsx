import bookstoreImage from "../assets/projects/bookstore.png";

const project = {
title: "Sam's Bookstore",
description:
"A responsive online bookstore built with React and TypeScript. Users can browse books, view product details, manage their shopping cart, and complete the checkout process.",
image: bookstoreImage,
technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
github: "https://github.com/sam59246677/sam-sbookstore",
live: "https://sam59246677.github.io/sam-sbookstore/",

};

function Projects() {
return ( <section id="projects" className="bg-white px-6 py-24"> <div className="mx-auto max-w-7xl"> <div className="max-w-3xl"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
Featured Project </p>


      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Sam's Bookstore
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        A selection of my frontend work, focused on building responsive
        and modern web applications with React and TypeScript.
      </p>
    </div>

    <article className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex">
      <div className="lg:w-3/5">
        <div className="aspect-video h-full overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:w-2/5 lg:p-10">
        <h3 className="text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  </div>
</section>


);
}

export default Projects;
