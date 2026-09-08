
function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's work together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          I'm open to frontend development opportunities, freelance projects,
          and collaborations. If you have an idea or project in mind, I'd be
          happy to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ssam.rostami13571364@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sam59246677"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
