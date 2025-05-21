import { useEffect, useState } from "react";
import AnimeRow from "../../components/animeRow/AnimeRow";
import Card from "../../components/card/Card";
import { getAnimeBySeason } from "../../service/animeService";
import AnimeCardLarge from "../../components/animeCardLarge/AnimeCardLarge";
import CardSkeleton from "../../components/card/CardSkeleton";

export default function Home() {
  const [animeSeason, setAnimeSeason] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAnimeSeason = async () => {
    const season = await getAnimeBySeason("spring");
    setAnimeSeason(season);
    setIsLoading(false);
  };
  useEffect(() => {
    getAnimeSeason();
  }, []);

  return (
    <>
      <AnimeRow title={"Temporada Primavera 2025"}>
        <div className="flex gap-4 w-full py-2.5 overflow-x-auto">
          {isLoading
            ? Array.from({ length: 10 }, (_, i) => <CardSkeleton key={i} />)
            : animeSeason.map((anime, index) => (
                <Card
                  key={index}
                  id={anime.mal_id}
                  image={anime.images.jpg.image_url}
                  title={anime.tituloIngles || anime.titulo}
                />
              ))}
        </div>
      </AnimeRow>
    </>
  );
}
