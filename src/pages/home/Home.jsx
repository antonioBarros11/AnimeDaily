import { useEffect, useState } from "react";
import AnimeRow from "../../components/animeRow/AnimeRow";
import { getAnimeBySeason } from "../../service/animeService";
import AnimeCarousel from "../../components/animeCarrousel/AnimeCarrousel";
import AnimeCardRow from "../../components/animeCardRow/AnimeCardRow";
import AnimeCardLarge from "../../components/animeCardLarge/AnimeCardLarge";

export default function Home() {
  const [animeSeason, setAnimeSeason] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSeasonAnime, setCurrentSeasonAnime] = useState([]);
  const [previousSeasonAnime, setPreviousSeasonAnime] = useState([]);
  const [year2024Anime, setYear2024Anime] = useState([]);

  const getSeasonInfo = (date = new Date()) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const seasons = ["winter", "spring", "summer", "fall"];

    let currentIndex;
    if (month <= 2) currentIndex = 0;
    else if (month <= 5) currentIndex = 1;
    else if (month <= 8) currentIndex = 2;
    else currentIndex = 3;

    const currentSeason = seasons[currentIndex];
    const previousSeasonIndex = (currentIndex + 3) % 4;
    const previousSeason = seasons[previousSeasonIndex];

    const previousYear = currentIndex === 0 ? year - 1 : year;

    return {
      current: { season: currentSeason, year },
      previous: { season: previousSeason, year: previousYear },
    };
  };

  const getAnimeSeason = async () => {
    setIsLoading(true);
    const { current, previous } = getSeasonInfo();

    const currentAnime = await getAnimeBySeason(current.year, current.season);
    const previousAnime = await getAnimeBySeason(
      previous.year,
      previous.season
    );
    const anime2024 = await getAnimeBySeason(2024, "fall");

    if (!currentAnime.error) setCurrentSeasonAnime(currentAnime.slice(0, 20));
    if (!previousAnime.error)
      setPreviousSeasonAnime(previousAnime.slice(0, 20));
    if (!anime2024.error) setYear2024Anime(anime2024.slice(0, 20));

    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeSeason();
  }, []);

  return (
    <>
      <AnimeRow title={"Temporada Actual"}>
        <AnimeCarousel animes={currentSeasonAnime} isLoading={isLoading} />
      </AnimeRow>

      <AnimeRow title={"Temporada Anterior"}>
        <AnimeCarousel animes={previousSeasonAnime} isLoading={isLoading} />
      </AnimeRow>

      <AnimeRow title={"Temporada 2024 - Fall"}>
        <AnimeCarousel animes={year2024Anime} isLoading={isLoading} />
      </AnimeRow>
    </>
  );
}
