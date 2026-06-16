export default function Card({
  title,
  description
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2">
        {description}
      </p>
    </div>
  );
}