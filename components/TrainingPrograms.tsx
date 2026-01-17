import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const programData = [
  {
    title: "Body Balance",
    subtitle: "Flexibility & Core",
    description: "Combine yoga, tai chi, and pilates to build flexibility and strength while leaving you feeling centered and calm.",
    image: "/programs/bodyBallance.jpg"
  },
  {
    title: "Boxing Classes",
    subtitle: "High Intensity",
    description: "Learn proper boxing technique while getting a full-body workout that improves cardiovascular health and coordination.",
    image: "/programs/box.jpg"
  },
  {
    title: "Cardio Blast",
    subtitle: "Endurance",
    description: "Heart-pumping cardio sessions designed to burn calories and improve your overall aerobic fitness levels.",
    image: "/programs/cardio.jpg"
  },
  {
    title: "Crossfit",
    subtitle: "Strength & Conditioning",
    description: "Constantly varied functional movements performed at high intensity to prepare you for any physical challenge.",
    image: "/programs/crossfit.jpg"
  }
];

const DetailBox = ({ program, index }: { program: typeof programData[0], index: number }) => {
  // Logic: Indices 0 (Row 1 Col 1) and 3 (Row 2 Col 2) are Secondary.
  // Indices 1 (Row 1 Col 2) and 2 (Row 2 Col 1) are Dark Gray.
  const isSecondary = index === 0 || index === 3;
  
  return (
    <div className={`aspect-square w-full h-full p-8 md:p-12 flex flex-col justify-center transition-colors ${
      isSecondary 
        ? 'bg-secondary text-secondary-foreground' 
        : 'bg-zinc-900 text-white'
    }`}>
      <span className={`font-medium tracking-wider uppercase text-sm mb-3 ${
        isSecondary ? 'text-secondary-foreground/80' : 'text-gray-400'
      }`}>
        {program.subtitle}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        {program.title}
      </h3>
      <p className={`leading-relaxed mb-8 ${
        isSecondary ? 'text-secondary-foreground/90' : 'text-gray-300'
      }`}>
        {program.description}
      </p>
      <div>
        <button className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
          isSecondary ? 'text-secondary-foreground' : 'text-white'
        }`}>
          <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-secondary-foreground" />
        </button>
      </div>
    </div>
  );
};

const ImageBox = ({ program }: { program: typeof programData[0] }) => (
  <div className="aspect-square w-full h-full relative overflow-hidden group">
    <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110">
      <Image
        src={program.image}
        alt={program.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
        priority
        quality={75}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10" />
    </div>
  </div>
);

const TrainingPrograms = () => {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="container mx-auto px-4 py-20 text-center max-w-3xl">
        <h4 className="text-primary font-semibold tracking-wide uppercase mb-3">Our Classes</h4>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Explore Our Training Programs
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Discover a wide range of workouts tailored to your goals. From high-intensity cardio to mind-body balance, we have expert-led programs for every fitness level.
        </p>
      </div>

      {/* 
        Grid Layout:
        Mobile: 1 column
        Tablet: 2 columns
        Desktop: 4 columns
        
        Row 1 (Programs 0 & 1):
        [Detail] [Image] [Detail] [Image]
        
        Row 2 (Programs 2 & 3):
        [Image] [Detail] [Image] [Detail]
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {/* Row 1 */}
        <div className="col-span-1 border-r border-b border-border/50"><DetailBox program={programData[0]} index={0} /></div>
        <div className="col-span-1"><ImageBox program={programData[0]} /></div>
        
        <div className="col-span-1 border-r border-b border-border/50"><DetailBox program={programData[1]} index={1} /></div>
        <div className="col-span-1"><ImageBox program={programData[1]} /></div>

        {/* Row 2 - Swapped Order */}
        <div className="col-span-1"><ImageBox program={programData[2]} /></div>
        <div className="col-span-1 border-l border-b lg:border-b-0 border-border/50"><DetailBox program={programData[2]} index={2} /></div>
        
        <div className="col-span-1"><ImageBox program={programData[3]} /></div>
        <div className="col-span-1 border-l border-b lg:border-b-0 border-border/50"><DetailBox program={programData[3]} index={3} /></div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
