import person01 from "../assets/person1.webp";
import person02 from "../assets/person2.webp";
import person03 from "../assets/person3.webp";
import person04 from "../assets/person4.webp";

interface Team {
  name: string;
  role: string;
  desc: string;
  image: string;
}

const teamMembers: Team[] = [
  {
    name: "Sebastian Bennett",
    role: "Founder & Principal Architect",
    desc: "Dedicated to creating timeless architectural solutions that combine functionality, elegance, and precision.",
    image: person01,
  },
  {
    name: "Anna Ruperts",
    role: "Chief Executive Officer",
    desc: "Leads the studio with a focus on innovation, quality, and delivering exceptional client experiences.",
    image: person02,
  },
  {
    name: "Johnson Chang",
    role: "Construction Manager",
    desc: "Oversees all on-site operations, ensuring every project is executed with accuracy, safety, and attention to detail.",
    image: person03,
  },
  {
    name: "Mike Turner",
    role: "Site & Project Manager",
    desc: "Coordinates construction processes and ensures smooth communication between design and execution teams.",
    image: person04,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 bg-linear-to-t from-gray-300/20 to-transparent"
    >
      <div className="mx-8 mb-20 flex flex-col gap-10 items-start lg:items-center">
        <h2 className="text-left lg:text-center">Meet Our Expert Team</h2>
        <p className="text-left lg:text-center">
          Our team combines architectural expertise, construction experience,
          and creative vision to deliver homes that are both functional and
          beautifully designed.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start lg:items-center pb-10 first:pt-0 last:pb-0"
          >
            <div className="pb-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-75 h-75 object-cover rounded-full"
              />
            </div>

            <div>
              <p className="text-black">{member.role}</p>
              <p className="text-black font-bold text-3xl">
                {member.name}
              </p>
              <p className="text-black">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
