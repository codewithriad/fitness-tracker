import FitnessGoals from "@/components/FitnessGoals";
import HeroSwiper from "@/components/HeroSwiper";
import TrainingPrograms from "@/components/TrainingPrograms";
import WhatWeOffer from "@/components/WhatWeOffer";
import VideoSection from "@/components/workouts/VideoSection";
import WorkoutCard from "@/components/workouts/WorkoutCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSwiper />
      <WorkoutCard/>
      <VideoSection />
      <WhatWeOffer />
      <TrainingPrograms />
      <FitnessGoals />
      
      {/* Placeholder for future sections */}
     
    </main>
  );
}
