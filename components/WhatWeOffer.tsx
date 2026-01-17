import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const offers = [
  "Personalized Workout Plans",
  "Expert Nutritional Guidance",
  "24/7 Trainer Support",
  "Progress Tracking Tools"
];

const WhatWeOffer = () => {
  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary font-semibold tracking-wide uppercase mb-2">Our Services</h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                What We Offer For <br /> Your Health
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide comprehensive fitness solutions tailored to your unique lifestyle and goals. 
              Our holistic approach ensures you get the support you need at every step of your journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offers.map((offer, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{offer}</span>
                </div>
              ))}
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors">
              Explore Services
            </button>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[300px] md:h-[600px] w-full">
            {/* Image 1 - Top Right */}
            <div className="absolute top-0 right-2 md:right-4 w-[55%] h-[80%] md:h-[85%] rounded-2xl shadow-xl z-10 overflow-hidden">
              <Image
                src="/workoutTypes/workoutType1.jpg"
                alt="Fitness workout training"
                fill
                sizes="(max-width: 768px) 40vw, 30vw"
                className="object-cover"
                priority
                quality={75}
              />
            </div>
            
            {/* Image 2 - Bottom Left */}
            <div className="absolute bottom-0 left-2 md:left-4 w-[55%] h-[80%] md:h-[85%] rounded-2xl shadow-xl z-20 overflow-hidden border-4 md:border-8 border-background">
              <Image
                src="/workoutTypes/workoutType3.jpg"
                alt="Fitness strength training"
                fill
                sizes="(max-width: 768px) 40vw, 30vw"
                className="object-cover"
                priority
                quality={75}
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
