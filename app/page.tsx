import HeroSwiper from "@/components/HeroSwiper";
import WorkoutCard from "@/components/workouts/WorkoutCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSwiper />
      <WorkoutCard/>
      
      {/* Placeholder for future sections */}
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-muted-foreground">Join thousands of others achieving their goals.</p>
      </div>
    </main>
  );
}
