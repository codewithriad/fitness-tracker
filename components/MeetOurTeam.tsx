"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Cardio Trainer",
    role: "Cardio Specialist",
    image: "/team/cardio-trainer.png",
  },
  {
    name: "Crossfit Expert",
    role: "Strength Coach",
    image: "/team/crossfit-expert.png",
  },
  {
    name: "Crossfit Expert 2",
    role: "Fitness Instructor",
    image: "/team/crossfit-expert2.png",
  },
  {
    name: "Crossfit Expert 3",
    role: "Body Building",
    image: "/team/crossfit-expert3.png",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
              Our Professional Team
            </h4>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Meet Our <br /> Strongest Team
            </h2>
          </div>
          
          <Button 
            variant="link" 
            className="group p-0 h-auto text-foreground font-black tracking-widest uppercase flex items-center gap-3 hover:no-underline hover:text-primary transition-colors duration-300"
          >
            Read More
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-foreground group-hover:text-primary-foreground" />
            </div>
          </Button>
        </div>
      </div>

      {/* Full width image container */}
      <div className="w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 lg:gap-2">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden group bg-[#111]"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-r-primary border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
