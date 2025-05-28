import axiosNews from "../lib/axiosNews";

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
