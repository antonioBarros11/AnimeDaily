import { useEffect, useState } from "react";
import NewsSkeleton from "./NewsSkeleton";
import { getAnimeNews } from "../../service/animeNews";

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
        ? Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>
              <NewsSkeleton />
            </div>
          ))
        : news.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-xl shadow-gray-600 overflow-hidden w-full max-w-sm"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
              </a>
              <div className="w-full p-6">
                <h5 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h5>
                <p className="text-sm font-medium text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="text-xs text-gray-500">
                  <span>{item.author || "Desconocido"}</span> ·{" "}
                  <span>{new Date(item.publishedAt).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
