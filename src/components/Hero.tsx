import heroImage from "../assets/hero.jpg";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section
      className="bg-position-[-8rem_center] bg-cover h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full h-full bg-linear-to-t from-black to-transparent px-8 pb-14 flex flex-col justify-center">
        <h1 className="text-white mb-10">Start your buisness</h1>
        <p className="text-white mb-15">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>

        <div className="flex justify-between">
          {/* Użycie komponentu! Czysty, deklaratywny kod */}
          <Button onClick={() => console.log("Kliknięto!")}>O nas</Button>
        </div>
      </div>
    </section>
  );
}
