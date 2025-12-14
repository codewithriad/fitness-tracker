export default function WorkoutDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Workout Details {params.id}</h1>
    </div>
  );
}
