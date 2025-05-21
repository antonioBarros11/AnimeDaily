import { useEffect, useState } from "react";
import AnimeRow from "../../components/animeRow/AnimeRow";
import { getAnimeBySeason } from "../../service/animeService";
import AnimeCarousel from "../../components/animeCarrousel/AnimeCarrousel";
import AnimeCardRow from "../../components/animeCardRow/AnimeCardRow";

export default function Home() {
  const [animeSeason, setAnimeSeason] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAnimeSeason = async () => {
    const season = await getAnimeBySeason("spring");
    if (season.length > 0) {
      setAnimeSeason(season.slice(0, 20));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeSeason();
  }, []);

  return (
    <>
      <AnimeRow title={"Temporada Primavera 2025"}>
        <AnimeCarousel animes={animeSeason} isLoading={isLoading} />
      </AnimeRow>
      <AnimeCardRow description={"ddddddd"} />
      <AnimeRow title={"Temporada Primavera 2025"}>
        <AnimeCarousel animes={animeSeason} isLoading={isLoading} />
      </AnimeRow>
      <AnimeRow title={"Temporada Primavera 2025"}>
        <AnimeCarousel animes={animeSeason} isLoading={isLoading} />
      </AnimeRow>
    </>
  );
}
