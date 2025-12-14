export default function ExerciseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Exercise Details {params.id}</h1>
    </div>
  );
}
