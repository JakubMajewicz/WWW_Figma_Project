import heroImage from "../assets/hero.webp";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-position-[-8rem_center] bg-cover h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full h-full bg-linear-to-t from-black to-transparent px-8 pb-14 flex flex-col justify-center">
        <h1 className="text-white mb-10">Design your dream home</h1>
        <p className="text-white mb-15">
          We create modern and functional house designs tailored to your needs.
          From concept to detailed architectural plans, we help you bring your
          dream home to life with precision, style, and comfort.
        </p>

        <div className="flex justify-between">
          <Button onClick={() => console.log("Kliknięto!")}>
            Learn more about us
          </Button>
        </div>
      </div>
    </section>
  );
}
