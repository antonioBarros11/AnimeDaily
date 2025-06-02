import { Link } from "react-router-dom";

export default function AnimeCardLarge({
  id,
  image,
  title,
  description,
  genero,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <Link className="no-underline" to={`anime-details/${id}`}>
        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1  text-white">{description}</p>
            <div className="mt-5 sm:mt-auto">
              <p className="text-xs  text-white">{genero}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
