import { Heart, User, Users } from 'lucide-react';
import Image from 'next/image';

const workoutTypes = [
  {
    title: 'Group Fitness',
    icon: Users,
    image: '/workoutTypes/workoutType1.jpg',
    description: 'Join our energetic group sessions to stay motivated and achieve your fitness goals together with a supportive community.',
  },
  {
    title: 'Personal Trainer',
    icon: User,
    image: '/workoutTypes/workoutType2.jpg',
    description: 'Get one-on-one coaching tailored to your specific needs, verifying your form and maximizing your results.',
  },
  {
    title: 'Cardio Program',
    icon: Heart,
    image: '/workoutTypes/workoutType3.jpg',
    description: 'Boost your endurance and heart health with our scientifically designed cardio programs suitable for all levels.',
  },
];

const WorkoutCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
      {workoutTypes.map((workout, index) => (
        <div 
          key={index} 
          className="group relative h-[500px] w-full overflow-hidden"
        >
          {/* Background Image - Optimized with Next.js Image */}
          <div className="absolute inset-0">
            <Image
              src={workout.image}
              alt={workout.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={75}
              priority={index === 0} // Load first image with priority
              loading={index === 0 ? undefined : 'lazy'} // Lazy load other images
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white z-20">
            <div className="transform transition-all duration-300 group-hover:-translate-y-4">
              <workout.icon className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-3xl font-bold uppercase tracking-wider">{workout.title}</h3>
            </div>
            
            <div className="max-w-md translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mt-4 text-base font-medium leading-relaxed">
                {workout.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutCard;