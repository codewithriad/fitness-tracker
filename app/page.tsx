import HeroSwiper from "@/components/HeroSwiper";
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
      
      {/* Placeholder for future sections */}
      <div className="container py-16 text-center"></div>
    </main>
  );
}
