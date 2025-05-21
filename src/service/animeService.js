import axios from "../lib/axiosConfig";

export async function getAnimeBySeason(season) {
  try {
    const response = await axios.get("/temporada/" + season);
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "No se ha podido optener los animes de temporada",
      };
    }
    return response.data;
  } catch (error) {
    return {
      error: "Error al intentar recuperar los animes de temporadas",
    };
  }
}

export async function getAnimeDetailsById(id) {
  try {
    const response = await axios.get(`/anime/${id}/full`);
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
