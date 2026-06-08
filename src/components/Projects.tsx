import project from "../assets/project.webp";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-neutral-900 py-20 lg:py-32"
    >
      <div className="mx-8 max-w-7xl lg:mx-auto lg:px-8">
        
        <div className="flex flex-col gap-6 mb-12 lg:mb-16">
          <h2 className="text-white text-3xl lg:text-5xl">
            Our Projects
          </h2>

          <p className="text-white max-w-2xl text-sm lg:text-base leading-relaxed">
            We design modern, functional, and timeless homes tailored to individual needs.
            Each project combines aesthetics, comfort, and practical solutions.
          </p>
        </div>

        <div className="h-[60vh] lg:h-[75vh] relative overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${project})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
            <a
              href="#"
              className="text-white underline text-xl lg:text-3xl hover:opacity-80 transition"
            >
              View our projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}