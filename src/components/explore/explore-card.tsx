export function ExploreCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-gray-500">Explore this label</p>
    </div>
  );
}
