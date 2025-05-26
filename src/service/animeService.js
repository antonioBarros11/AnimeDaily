import axios from "../lib/axiosConfig";
import axiosNews from "../lib/axiosNews";

{
  /**Animes por  temporada  */
}

export async function getAnimeBySeason(season) {
  try {
    const response = await axios.get("/api/animes/temporada/" + season);
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "No se ha podido optener los animes de temporada",
      };
    }
    return response.data.content;
  } catch (error) {
    return {
      error: "Error al intentar recuperar los animes de temporadas",
    };
  }
}

{
  /**Detalles de los Animes  */
}

export async function getAnimeDetailsById(id) {
  try {
    const response = await axios.get(`/api/animes/ID/${id}`);
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "No se ha podido obtener el detalle  de los animes",
      };
    }
    return response.data;
  } catch (error) {
    return {
      error: "Error al intentar recuperar  los detalles del anime ",
    };
  }
}

{
  /**Noticias de animes   */
}

export const getAnimeNews = async () => {
  try {
    const response = await axiosNews.get("/everything", {
      params: {
        q: "anime",
        language: "es",
        sortBy: "relevancy",
        pageSize: 10,
      },
    });

    if (response.status !== 200) {
      return { error: "No se pudieron obtener las noticias" };
    }

    return response.data.articles;
  } catch (error) {
    return { error: "Error al obtener noticias" };
  }
};
