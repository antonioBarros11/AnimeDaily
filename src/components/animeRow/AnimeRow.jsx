export default function AnimeRow({ title, children }) {
  return (
    <section className="px-10 ">
      <h2 className="text-white text-[22px] font-bold py-5 ">{title}</h2>
      <div className="text-white  ">{children}</div>
    </section>
  );
}
