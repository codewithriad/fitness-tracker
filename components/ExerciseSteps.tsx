"use client";

import Image from "next/image";

const steps = [
  {
    title: "Jumping",
    description: "Elevate your heart rate and improve agility with dynamic jumping exercises.",
    image: "/steps/jumping.png",
  },
  {
    title: "Movement",
    description: "Focus on functional movement patterns to enhance flexibility and strength.",
    image: "/steps/movement.png",
  },
  {
    title: "Running",
    description: "Build endurance and cardiovascular health with consistent running sessions.",
    image: "/steps/running.png",
  },
  {
    title: "Time",
    description: "Track your progress and stay consistent with structured workout timing.",
    image: "/steps/time.png",
  },
];

const ExerciseSteps = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">
            How It Works
          </h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Steps of <span className="text-primary">Exercise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Follow these essential steps to maximize your workout efficiency and achieve your fitness goals effectively.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-4 group/container">
          {/* Dashed Line Background (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-primary/20 -z-10" />
          
          {/* Dashed Line Background (Mobile) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[100px] bottom-[100px] w-[2px] border-l-2 border-dashed border-primary/20 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:flex-1 text-center group">
              {/* Circular Image Wrapper */}
              <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] rounded-full border-2 border-dashed border-primary/30 p-2 animate-[spin_20s_linear_infinite] group-hover:border-primary group-hover:animate-[spin_10s_linear_infinite] transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-full border-4 border-border overflow-hidden bg-muted group-hover:border-primary transition-colors duration-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg shadow-xl border-4 border-background group-hover:scale-110 transition-transform duration-300">
                  0{index + 1}
                </div>
              </div>

              {/* Title and Description */}
              <div className="max-w-[250px] space-y-3">
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10vw] font-black uppercase text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none">
        Training Process
      </div>
    </section>
  );
};

export default ExerciseSteps;
