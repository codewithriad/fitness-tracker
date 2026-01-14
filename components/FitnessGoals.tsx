
const goalsData = [
  {
    title: "Muscle Building",
    description: "Build lean muscle mass with our targeted strength training programs designed for maximum growth and definition.",
    image: "/goals/muscle.jpg"
  },
  {
    title: "Weight Loss",
    description: "Achieve your ideal weight through our comprehensive fat-burning workouts and nutrition guidance.",
    image: "/goals/weightloss.jpg"
  },
  {
    title: "Endurance",
    description: "Boost your stamina and cardiovascular health with progressive endurance training programs.",
    image: "/goals/endurance.jpg"
  },
  {
    title: "Flexibility",
    description: "Improve your range of motion and prevent injuries with our flexibility and mobility training.",
    image: "/goals/flexibility.jpg"
  }
];

const FitnessGoals = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Set High Fitness Goals
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After you decide to start training we will make sure you get the best fitness program. 
            Our sport experts and latest sports equipment are the winning combination.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {goalsData.map((goal, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden bg-muted">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${goal.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessGoals;
