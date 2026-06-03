import person01 from "../assets/person1.jpg";
import person02 from "../assets/person2.jpg";
import person03 from "../assets/person3.jpg";
import person04 from "../assets/person4.jpg";

const teamMembers = [
  {
    name: "Sebastian Bennett",
    role: "Founder",
    desc: "Quidam officiis similique tollit indoctum efficiendi tantas platonem eos.",
    image: person01,
  },
  {
    name: "Robert Ruperts",
    role: "CEO",
    desc: "Quidam officiis similique tollit indoctum efficiendi tantas platonem eos.",
    image: person02,
  },
  {
    name: "Johnson Chang",
    role: "Construction Manager",
    desc: "Quidam officiis similique tollit indoctum efficiendi tantas platonem eos.",
    image: person03,
  },
  {
    name: "Johnson Chang",
    role: "Construction Manager",
    desc: "Quidam officiis similique tollit indoctum efficiendi tantas platonem eos.",
    image: person04,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 bg-linear-to-t from-gray-300/20 to-transparent"
    >
      {/* Nagłówek */}
      <div className="mx-8 mb-20 flex flex-col gap-10">
        <h2>Meet With Our Skilled Team</h2>
        <p>
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos.
        </p>
      </div>

      {/* Karty osób */}
      <div className="mx-8 mt-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center flex-col py-10 first:pt-0 last:pb-0"
          >
            <div className="pb-10">
              <img  src={member.image} alt="" className="w-75 h-75 object-cover rounded-full"/>
            </div>
            <div>
              <p className="text-black">{member.role}</p>
              <p className="text-black font-bold text-3xl">{member.name}</p>
              <p className="text-black">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
