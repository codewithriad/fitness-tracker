export default function EditWorkoutPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Edit Workout {params.id}</h1>
    </div>
  );
}
