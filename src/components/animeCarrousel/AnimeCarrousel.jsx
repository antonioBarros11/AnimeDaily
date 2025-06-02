import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

export default function AnimeCarousel({ animes, isLoading }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 8, spacing: 12 },
      },
      "(min-width: 768px)": {
        slides: { perView: 6, spacing: 1 },
      },
    },
    slides: {
      perView: 1.5,
      spacing: 5,
    },
    mode: "free-snap",
  });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrowState = () => {
    const slider = instanceRef.current;
    if (!slider) return;
    const details = slider.track.details;
    setCanScrollLeft(details.rel > 0);
    setCanScrollRight(
      details.rel < details.slides.length - details.slidesPerView
    );
  };

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;
    slider.on("slideChanged", updateArrowState);
    slider.on("created", updateArrowState);
  }, [instanceRef]);

  const scrollPrev = () => instanceRef.current?.prev();
  const scrollNext = () => instanceRef.current?.next();

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider p-2">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="keen-slider__slide w-[180px] flex-shrink-0"
              >
                <CardSkeleton />
              </div>
            ))
          : animes.map((anime, i) => (
              <div
                key={i}
                className="keen-slider__slide w-[180px] flex-shrink-0"
              >
                <Card
                  id={anime.id}
                  image={anime.imagenUrl}
                  title={anime.tituloIngles || anime.titulo}
                />
              </div>
            ))}
      </div>

      {canScrollLeft && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow-md"
        >
          ◀
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow-md"
        >
          ▶
        </button>
      )}
    </div>
  );
}
