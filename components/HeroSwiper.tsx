"use client";

import React from "react";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";

const heroSlides = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "PUSH YOUR LIMITS",
    subtitle: "ACHIEVE YOUR FITNESS GOALS",
    cta: "START TRAINING",
    link: "/signup",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "BUILD YOUR BODY",
    subtitle: "EXPERT WORKOUT PLANS",
    cta: "VIEW PLANS",
    link: "/workouts",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "EAT HEALTHY",
    subtitle: "FUEL YOUR PERFORMANCE",
    cta: "GET DIET PLAN",
    link: "/nutrition",
  },
];

export default function HeroSwiper() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section className="w-full h-[calc(100vh-64px)] min-h-[600px] bg-background border-b border-border/40" />;
  }

  return (
    <section className="relative w-full h-[calc(100vh-64px)] min-h-[600px] bg-background border-b border-border/40 overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <div className="absolute top-[15%] left-[5%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-[10%] right-[10%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute top-[30%] left-[45%] w-[100px] h-[100px] border border-primary/20 rounded-full opacity-20" />
      </div>

      <Swiper
        spaceBetween={0}
        effect={"fade"}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' !w-2 !h-2 !bg-primary/50 !opacity-50 hover:!opacity-100 transition-all duration-300"></span>';
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-full group"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] w-full h-full">
              
              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center px-8 md:px-16 lg:pl-40 lg:pr-24 z-20 order-2 lg:order-1 relative">
                <div className="space-y-6 max-w-5xl">
                   {/* Dynamic Line on Left */}
                   <div className="w-12 h-1 bg-primary mb-6 animate-in slide-in-from-left-full duration-1000 delay-300" />
                   
                  <p className="text-primary font-bold tracking-[0.3em] text-sm md:text-base uppercase animate-in slide-in-from-left-12 fade-in duration-700 delay-200 fill-mode-both">
                    {slide.subtitle}
                  </p>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] uppercase animate-in slide-in-from-left-16 fade-in duration-700 delay-300 fill-mode-both">
                    {slide.title}
                  </h1>
                  
                  <div className="pt-6 animate-in slide-in-from-left-20 fade-in duration-700 delay-500 fill-mode-both">
                    <Button 
                      size="lg" 
                      className="h-14 px-10 text-lg font-bold tracking-wider uppercase gap-2 group/btn rounded-none hover:bg-primary/90"
                    >
                      {slide.cta}
                      <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative w-full h-full order-1 lg:order-2 overflow-hidden bg-muted/20">
                 {/* Image Animation Container */}
                 <div className="absolute inset-0 w-full h-full animate-in slide-in-from-right-12 fade-in duration-1000 delay-100 fill-mode-both">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                     {/* Overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/50 lg:to-background pointer-events-none" />
                 </div>
              </div>

            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons (positioned appropriately) */}
        <div className="hidden lg:flex swiper-button-prev !text-foreground/50 hover:!text-primary transition-colors !left-8"></div>
        <div className="hidden lg:flex swiper-button-next !text-foreground/50 hover:!text-primary transition-colors !right-8"></div>
        
        {/* Custom Pagination Position */}
        <div className="swiper-pagination !bottom-8 !left-8 md:!left-16 lg:!left-24 !text-left !w-auto"></div>
      </Swiper>
    </section>
  );
}
