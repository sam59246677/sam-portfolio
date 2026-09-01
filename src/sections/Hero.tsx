import profileImage from "../assets/profile.jpg";
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Frontend Developer
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            I build responsive web applications with React and TypeScript.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I'm Sam, a frontend developer focused on building responsive,
            accessible, and user-friendly web applications using React,
            TypeScript, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-50"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Vite</span>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-blue-100">
            <div className="absolute h-64 w-64 rounded-full bg-blue-200" />

            {/* <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-blue-600 text-7xl font-bold text-white shadow-2xl">
              S
            </div> */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full bg-blue-100 shadow-2xl">
  <img
    src={profileImage}
    alt="Sam Rostami"
    className="h-full w-full object-cover"
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;