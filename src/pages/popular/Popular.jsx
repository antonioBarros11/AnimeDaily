import React, { useEffect, useState } from "react";
import { getAnimeByPopular } from "../../service/animeService";
import Hero from "../../components/navbar/heroSection/Hero";
import Card from "../../components/card/Card";

export default function PopularAnimes() {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPopularAnimes = async () => {
      const result = await getAnimeByPopular();
      console.log(result)
      if (result?.error) {
        setError(result.error);
      } else {
        setAnimes(result);
      }
    };

    fetchPopularAnimes();
  }, []);

  return (
    <>
      <Hero
        p={"Tendencias del momento"}
        title={"Explora los animes más populares"}
        subtitle={"lo más visto, comentado y amado por la comunidad"}
        description={
          "Bienvenido a la sección de populares de AnimeDaily, donde reunimos los títulos que están arrasando entre los fans. Descubre qué animes están dominando las conversaciones, rompiendo récords y marcando tendencia esta temporada."
        }
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {animes.map((anime) => (
              <Card
                key={anime.id}
                id={anime.id}
                image={anime.imagenUrl}
                title={anime.tituloIngles || anime.titulo}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
