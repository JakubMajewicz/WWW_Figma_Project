import { useInView } from "../hooks/useInView";

interface Review {
  quote: string;
  name: string;
  rating: number;
}

const reviews: Review[] = [
  {
    quote:
      "I recently worked with the team on the design and construction of my new home. From the initial consultation to the final walkthrough, the team was professional, responsive, and dedicated to meeting my needs and expectations.",
    name: "Hannah Barbera",
    rating: 5,
  },
  {
    quote:
      "The design they came up with was exactly what I had hoped for, and they were able to bring it to life with attention to detail and high-quality craftsmanship. They also navigated any challenges that arose during the construction process.",
    name: "Adam Lee",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  const clampedRating = Math.min(Math.max(Math.round(rating), 0), 5);

  return (
    <div className="flex gap-1" role="img" aria-label={`Ocena: ${rating} na 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled = i < clampedRating;

        return (
          <span
            key={i}
            className="text-primary text-3xl mb-4"
            aria-hidden="true"
          >
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`border-t border-gray-200 py-10 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <StarRating rating={review.rating} />

      <blockquote className="mb-4">
        <p className="text-dark leading-relaxed">"{review.quote}"</p>
      </blockquote>

      <footer className="flex items-center justify-between">
        <div className="items-center">
          <div>
            <p className="font-bold text-dark text-2xl">{review.name}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default function Reviews() {
  const { ref: headerRef, inView: headerVisible } = useInView();

  return (
    <section
      id="reviews"
      aria-label="Opinie klientów"
      className="py-20 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2
          ref={headerRef as React.RefObject<HTMLHeadingElement>}
          className={`mb-12 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          What our clients say
        </h2>
        <p className="mb-6">
          We work closely with our clients to design and build homes that
          reflect their lifestyle, needs, and vision. Here’s what they have to
          say about their experience.
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
