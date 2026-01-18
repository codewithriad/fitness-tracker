import BmiCalculator from "@/components/BmiCalculator";
import ClassesTimetable from "@/components/ClassesTimetable";
import ExerciseSteps from "@/components/ExerciseSteps";
import FitnessGoals from "@/components/FitnessGoals";
import HeroSwiper from "@/components/HeroSwiper";
import MeetOurTeam from "@/components/MeetOurTeam";
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
      <ExerciseSteps />
      <FitnessGoals />
      <BmiCalculator/>
      <ClassesTimetable/>
      <MeetOurTeam />
      
      
      {/* Placeholder for future sections */}
     
    </main>
  );
}
