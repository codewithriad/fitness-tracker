"use client";

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="w-full bg-background py-16 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Video Trigger */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            {/* Thumbnail / Placeholder Background */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center bg-[url('/workoutTypes/workoutType2.jpg')] bg-cover bg-center">
               <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 ml-1 fill-current" />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0 border-none bg-black overflow-hidden">
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/se1RDOPvA8Q?autoplay=1"
                    title="Workout Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Transform Your Body with <span className="text-primary">Professional Guidance</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience our world-class workout programs designed to help you reach your fitness goals faster. 
              Our expert trainers provide the motivation and expertise you need to succeed, 
              whether you're just starting out or looking to take your fitness to the next level.
            </p>
            <div className="pt-4">
              <Button size="lg" className="rounded-full px-8 text-base font-semibold">
                Read More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
