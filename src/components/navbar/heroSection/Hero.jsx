export default function Hero({ p,title,subtitle, description }) {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-pink-600 font-medium">
            {p}
            </h1>
            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
              {title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E114E5] to-[#4F46E5]">
                {subtitle}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white">{description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
