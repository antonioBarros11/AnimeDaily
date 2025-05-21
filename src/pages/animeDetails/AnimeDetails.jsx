import { useParams } from "react-router-dom";
import { getAnimeDetailsById } from "../../service/animeService";
import { useEffect, useState } from "react";

export default function AnimeDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [animeDetails, setAnimeDetails] = useState();
  const { id } = useParams();
  
  const handleAnimeDetails = async () => {
    console.log(id);
    const response = await getAnimeDetailsById(id);
    console.log(response);
    setAnimeDetails(response);

    setIsLoading(false);
  };

  useEffect(() => {
    handleAnimeDetails();
  }, []);

  return isLoading ? (
    <p>Cargando...</p>
  ) : (
    <div className="flex flex-col p-10 overflow-x-auto">
      {/* arriba*/}
      <section className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <img
            src={animeDetails.images.webp.large_image_url}
            alt={animeDetails.title}
            className="rounded-2xl w-[250px] md:w-[300px] lg:w-[350px] "
          />
          <button className="flex p-2 justify-center text-center items-center gap-2 border-2 border-white rounded-xl text-white font-semibold text-lg hover:bg-white hover:text-black transition-all  w-[200px] md:w-[300px] lg:w-[350px]">
            Agregar a Carpeta
          </button>
        </div>

        <div className="text-white max-w-2xl">
          <h2 className="text-4xl font-bold text-center lg:text-left mb-4">
            {animeDetails.title_english || animeDetails.title}
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start  my-8">
            <div className="">
              {animeDetails.genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="border-2 m-1 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <p className=" text-lg font-medium mb-6 text-justify">
            {animeDetails.synopsis}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
            <span className="border-2 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white">
              {animeDetails.type}
            </span>
            <span className="border-2 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white">
              Eps {animeDetails.episodes}
            </span>
            <span className="border-2 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white flex items-center gap-1">
              ★{animeDetails.score}
            </span>
            <span className="border-2 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white">
              {animeDetails.status}
            </span>
          </div>
        </div>
      </section>
      {/* center*/}
      <section className="flex flex-col items-center w-full px-2 py-4">
        <h2 className="text-2xl font-bold mb-4 text-center bg-gray-300 w-full max-w-5xl py-2 rounded">
          Trailer
        </h2>

        {animeDetails.trailer.embed_url && (
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={animeDetails.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>

      {/* final*/}
      <section className=""></section>
    </div>
  );
}
