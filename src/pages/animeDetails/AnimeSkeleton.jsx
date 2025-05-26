export default function AnimeSkeleton() {
  return (
    <div className="flex flex-col p-10 overflow-x-auto animate-pulse">
      <section className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-2xl w-[250px] md:w-[350px] h-[375px] bg-gray-500" />

          <div className="w-[200px] md:w-[300px] lg:w-[320px] h-12 bg-gray-500 rounded-xl" />
        </div>

        <div className="text-white max-w-2xl w-full">
          <div className="h-10 bg-gray-500 rounded mb-4 w-3/4 mx-auto lg:mx-0" />

          <div className="flex flex-wrap justify-center lg:justify-start my-8 gap-2">
            <div className="h-10 w-24 bg-gray-500 rounded-lg" />
          </div>

          <div className="text-lg font-medium mb-6 text-justify space-y-2">
            <div className="h-4 bg-gray-500 rounded w-full" />
            <div className="h-4 bg-gray-500 rounded w-5/6" />
            <div className="h-4 bg-gray-500 rounded w-4/6" />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
            <div className="h-8 w-20 bg-gray-500 rounded-lg" />
            <div className="h-8 w-24 bg-gray-500 rounded-lg" />
            <div className="h-8 w-28 bg-gray-500 rounded-lg" />
            <div className="h-8 w-20 bg-gray-500 rounded-lg" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full px-2 py-4">
        <div className="text-2xl font-bold mb-4 text-center bg-gray-600 w-full max-w-5xl py-5 rounded" />
        <div className="w-full max-w-5xl aspect-video bg-gray-500 rounded" />
      </section>

      <section className="mt-10" />
      <section className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 animate-pulse">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white uppercase rounded-full bg-teal-600 w-20 h-4"></span>
            </div>
            <div className="h-8 bg-gray-500 rounded mb-4 w-48 mx-auto"></div>
            <div className="h-4 bg-gray-500 rounded w-32 mx-auto"></div>
          </div>

          <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-6 bg-gray-500 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-500 rounded w-20"></div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2 my-10 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-6 bg-gray-500 rounded w-32"></div>
                </div>
                <div className="h-4 bg-gray-500 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
