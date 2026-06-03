import project from "../assets/project.jpg";

export default function Projects() {
  return (
    <section className="h-screen py-20 flex flex-col bg-neutral-900">
      <div className="mx-8 flex flex-col pb-10">
        <h2 className="text-white">Our Projects</h2>
        <p className="text-white">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </p>
      </div>
      <div className="mx-3 min-h-3/4">
        <div
          className="bg-cover h-full bg-center flex flex-col justify-end "
          style={{ backgroundImage: `url(${project})` }}
        >
          <div className="w-full bg-linear-to-t from-black to-transparent px-8 pb-14 pt-50">
            <a href="" className="text-white underline text-2xl">Zobacz nasze projekty →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
