import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

export default function AnimeCarousel({ animes, isLoading }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 12,
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
    setCanScrollRight(details.rel < details.slides.length - details.slidesPerView);
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
      <div ref={sliderRef} className="keen-slider py-3">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="keen-slider__slide w-auto">
                <CardSkeleton />
              </div>
            ))
          : animes.map((anime, i) => (
              <div key={i} className="keen-slider__slide w-auto">
                <Card
                  id={anime.malId}
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
