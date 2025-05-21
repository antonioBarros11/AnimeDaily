import { Link } from "react-router-dom";

export default function Card({ image, title, id }) {
  return (
    <div>
      <Link className="no-underline" to={`anime-details/${id}`}>
        <div className="flex flex-col  w-[180px] transition-transform hover:scale-[1.03] ">
          <img
            src={image}
            alt={title}
            className="w-full h-[250px] rounded-xl"
          />
          <h3 className="line-clamp-2 text-white text-[16px] font-semibold">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
