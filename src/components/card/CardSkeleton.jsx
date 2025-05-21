export default function CardSkeleton() {
  return (
    <div>
      <div className="min-w-[180px] h-[250px] bg-gray-500 animate-pulse  rounded-xl"></div>
      <div className="bg-gray-500 animate-pulse w-[180px] h-3.5 rounded-sm mt-3"></div>
    </div>
  );
}
