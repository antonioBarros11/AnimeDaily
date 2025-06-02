import { useParams } from "react-router-dom";
import { getAnimeDetailsById } from "../../service/animeService";
import { useEffect, useState } from "react";
import AnimeSkeleton from "./AnimeSkeleton";

export default function AnimeDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [animeDetails, setAnimeDetails] = useState(null);

  const { id } = useParams();

  const handleAnimeDetails = async () => {
    const response = await getAnimeDetailsById(id);

    setAnimeDetails(response);

    setIsLoading(false);
  };

  useEffect(() => {
    handleAnimeDetails();
  }, []);

  const getEmbedUrl = (url) => {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:\?v=|\/embed\/|\.be\/)([\w\-]{11})/);
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : null;
  };

  return (
    <div>
      {isLoading ? (
        <AnimeSkeleton />
      ) : (
        <div className="flex flex-col p-10 overflow-x-auto">
          <section className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <img
                src={animeDetails.imagenUrl}
                alt={
                  animeDetails.tituloIngles ||
                  animeDetails.titulo ||
                  animeDetails.tituloJapones
                }
                className="rounded-2xl w-[250px] md:w-[300px]"
              />

              <button className="flex p-2 justify-center text-center items-center gap-2 border-2 border-white rounded-xl text-white font-semibold text-lg hover:bg-white hover:text-black transition-all  w-[200px] md:w-[300px] lg:w-[350px]">
                Agregar a Carpeta
              </button>
            </div>

            <div className="text-white max-w-2xl">
              <h2 className="text-4xl font-bold text-center lg:text-left mb-4">
                {animeDetails.tituloIngles ||
                  animeDetails.titulo ||
                  animeDetails.tituloJapones}
              </h2>

              <div className="flex flex-wrap justify-center lg:justify-start  my-8">
                <div className="">
                  <span className="border-2 m-1 border-white px-4 py-2 rounded-lg text-sm md:text-base text-white">
                    {animeDetails.genero}
                  </span>
                </div>
              </div>

              <p className=" text-lg font-medium mb-6 text-justify">
                {animeDetails.descripcion}
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center w-full px-2 py-4">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gray-300 w-full max-w-5xl py-2 rounded">
              Trailer
            </h2>

            {animeDetails?.trailerUrl && (
              <div className="w-full max-w-5xl aspect-video">
                <iframe
                  className="w-full h-full rounded"
                  src={getEmbedUrl(animeDetails.trailerUrl)}
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </section>

          <section className="">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                    Estado
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  {animeDetails.estado}
                </h2>
                <p className="text-base text-white md:text-lg">
                  {animeDetails.clasificacion}
                </p>
              </div>
              <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Episodios</p>
                  </div>
                  <p className="text-white">{animeDetails.episodios}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Formato</p>
                  </div>
                  <p className="text-white">{animeDetails.tipo}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Favorito</p>
                  </div>
                  <p className="text-white">{animeDetails.favoritos}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">
                      Fecha Estreno
                    </p>
                  </div>
                  <p className="text-white">{animeDetails.fechaEstreno}</p>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2 my-10">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">
                      Temporada Estreno
                    </p>
                  </div>
                  <p className="text-white">{animeDetails.temporadaEstreno}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Estudio</p>
                  </div>
                  <p className="text-white">{animeDetails.estudios}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Fecha Final</p>
                  </div>
                  <p className="text-white">{animeDetails.fechaFinal}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-2xl font-bold text-white">Puntuacion</p>
                  </div>
                  <p className="text-white">{animeDetails.puntuacion}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-16">
              <p className="text-white text-xl font-semibold mb-4">
                Disponible en:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {animeDetails.streaming.split(",").map((platform, index) => {
                  const trimmed = platform.trim();
                  const domain =
                    trimmed.toLowerCase().replace(/\s+/g, "") + ".com";
                  const url = `https://${domain}`;

                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="link de pagina streaming"
                      title={trimmed}
                    >
                      <img
                        src={`https://logo.clearbit.com/${domain}`}
                        alt={trimmed}
                        className="object-contain bg-white rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300 w-16 h-16 flex items-center justify-center"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
