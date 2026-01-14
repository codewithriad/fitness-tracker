
const goalsData = [
  {
    title: "Quality Equipment",
    description: "Build lean muscle mass with our targeted strength training programs designed for maximum growth and definition.",
    image: "/goals/QualityEquipment.png"
  },
  {
    title: "Healthy Nutrition Plan",
    description: "Achieve your ideal weight through our comprehensive fat-burning workouts and nutrition guidance.",
    image: "/goals/HealthyNutritionPlan.png"
  },
  {
    title: "Shower Service",
    description: "Boost your stamina and cardiovascular health with progressive endurance training programs.",
    image: "/goals/ShowerService.png"
  },
  {
    title: "Unique to Your Needs",
    description: "Improve your range of motion and prevent injuries with our flexibility and mobility training.",
    image: "/goals/UniquetoYourNeeds.png"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {goalsData.map((goal, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-24 md:h-28 w-full overflow-hidden flex items-center justify-center">
                <img 
                  src={goal.image}
                  alt={goal.title}
                  className="w-16 md:w-20 h-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="pt-2 px-4 pb-4 text-center">
                <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-300">
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
