export default function AnimeCardLargeSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 animate-pulse">
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] bg-gray-200 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs dark:bg-neutral-700">
        
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7 w-full">
          <div className="h-5 bg-gray-200 rounded w-3/4 dark:bg-neutral-700"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded w-full dark:bg-neutral-700"></div>
          <div className="mt-1 h-4 bg-gray-200 rounded w-5/6 dark:bg-neutral-700"></div>
          <div className="mt-5 sm:mt-auto">
            <div className="h-3 bg-gray-200 rounded w-1/4 dark:bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
