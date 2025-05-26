export default function NewsSkeleton() {
  return (
    <div className="flex flex-col w-sm p-6 space-y-6 overflow-hidden rounded-lg bg-gray-50 :text-gray-800 animate-pulse">
      <div className="flex space-x-4">
        <div className="flex flex-col space-y-1">
          <div className="w-32 h-4 bg-gray-300 dark:bg-gray-400 rounded"></div>
          <div className="w-40 h-3 bg-gray-200 dark:bg-gray-300 rounded"></div>
        </div>
      </div>
      <div>
        <div className="w-full h-60 sm:h-96 mb-4 bg-gray-300 dark:bg-gray-400 rounded"></div>
        <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-400 mb-2 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-300 mb-1 rounded"></div>
        <div className="w-5/6 h-3 bg-gray-200 dark:bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
