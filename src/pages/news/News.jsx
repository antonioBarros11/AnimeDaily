import { useEffect, useState } from "react";
import { getAnimeNews } from "../../service/animeService";
import NewsSkeleton from "./NewsSkeleton";

export default function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAnimeNewsData = async () => {
    const newsData = await getAnimeNews();

    if (Array.isArray(newsData) && newsData.length > 0) {
      setNews(newsData.slice(0, 9));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeNewsData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 mt-10 ">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <NewsSkeleton />
            </div>
          ))
        : news.map((item, index) => (
            <div
              key={index}
              className="flex flex-col max-w-sm p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
            >
              <div className="flex space-x-4">
                <div className="flex flex-col space-y-1">
                  <a>{item.author || "Desconocido"}</a>
                  <span className="text-xs dark:text-gray-600">
                    {new Date(item.publishedAt).toLocaleString()}
                  </span>
                </div>
              </div>
              <div>
                <a href={item.url} target="_blank">
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                  />
                </a>
                <h2 className="mb-1 text-xl font-semibold">{item.title}</h2>
                <p className="text-sm dark:text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
    </div>
  );
}
