export default function NewsSkeleton() {
  return (
    <div className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden w-sm animate-pulse">
      <div className="w-full h-60 bg-gray-200" />

      <div className="w-full p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4" />

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
 
        <div className="flex space-x-2 pt-2">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
