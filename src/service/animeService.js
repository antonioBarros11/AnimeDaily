import axios from "../lib/axiosConfig";

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
  /**Nombre de los Animes  */
}

export async function getAnimeTitle(title) {
  try {
    const response = await axios.get(`/api/animes/titulo/${title}`);
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "No se ha podido obtener el titulo  de los animes",
      };
    }
    return response.data;
  } catch (error) {
    return {
      error: "Error al intentar recuperar el titulo del anime ",
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



export async function getAnimeByFilters(filters, page = 0, size = 20) {
  const params = new URLSearchParams();

  if (filters.genero) params.append("genero", filters.genero);
  if (filters.anio) params.append("anio", filters.anio);
  if (filters.temporada) params.append("temporada", filters.temporada);
  if (filters.formato) params.append("formato", filters.formato);
  if (filters.estado) params.append("estado", filters.estado);

  params.append("page", page);
  params.append("size", size);

  const url = `/api/anime/search?${params.toString()}`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200 && response.status !== 204) {
      return { error: "No se ha podido Encontrar de los animes" };
    }
    return response.data;
  } catch (error) {
    return { error: "Error al intentar recuperar los anime" };
  }
}
