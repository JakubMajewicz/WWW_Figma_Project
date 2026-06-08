import project from "../assets/project.webp";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen py-20 flex flex-col bg-neutral-900"
    >
      <div className="mx-8 flex flex-col pb-10">
        <h2 className="text-white">Our Projects</h2>
        <p className="text-white">
          We design modern, functional, and timeless homes tailored to
          individual needs. Each project combines aesthetics, comfort, and
          practical solutions.
        </p>
      </div>
      <div className="mx-3 min-h-3/4">
        <div
          className="bg-cover h-full bg-center flex flex-col justify-end "
          style={{ backgroundImage: `url(${project})` }}
        >
          <div className="w-full bg-linear-to-t from-black to-transparent px-8 pb-14 pt-50">
            <a href="#" className="text-white underline text-2xl">
              View our projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
