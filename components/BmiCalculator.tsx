'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [activityFactor, setActivityFactor] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      
      setBmiResult(parseFloat(bmi.toFixed(1)));
      
      if (bmi < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiCategory('Healthy');
      } else if (bmi >= 25 && bmi < 30) {
        setBmiCategory('Overweight');
      } else {
        setBmiCategory('Obese');
      }
    }
  };

  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - BMI Chart */}
          <div className="bg-background rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              BMI CALCULATOR CHART
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-2 md:px-4 font-bold text-sm md:text-base">
                      BMI
                    </th>
                    <th className="text-left py-4 px-2 md:px-4 font-bold text-sm md:text-base">
                      WEIGHT STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border transition-colors hover:bg-muted/50">
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base text-muted-foreground">
                      Below 18.5
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base">
                      Underweight
                    </td>
                  </tr>
                  <tr className="border-b border-border transition-colors hover:bg-muted/50">
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base text-muted-foreground">
                      18.5 - 24.5
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base text-green-600 dark:text-green-400 font-semibold">
                      Healthy
                    </td>
                  </tr>
                  <tr className="border-b border-border transition-colors hover:bg-muted/50">
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base text-muted-foreground">
                      25.0 - 29.9
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base">
                      Overweight
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/50">
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base text-muted-foreground">
                      30.0 and Above
                    </td>
                    <td className="py-4 px-2 md:px-4 text-sm md:text-base">
                      Obese
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-xs md:text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-semibold text-foreground">* BMR</span> Metabolic Rate / <span className="font-semibold text-foreground">BMI</span> Body Mass Index
              </p>
            </div>

            {/* BMI Result Display */}
            {bmiResult !== null && (
              <div className="mt-8 p-4 md:p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground mb-1">Your BMI Result:</p>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {bmiResult}
                </p>
                <p className="text-base md:text-lg font-semibold">
                  Status: <span className={`
                    ${bmiCategory === 'Healthy' ? 'text-green-600 dark:text-green-400' : ''}
                    ${bmiCategory === 'Underweight' ? 'text-yellow-600 dark:text-yellow-400' : ''}
                    ${bmiCategory === 'Overweight' ? 'text-orange-600 dark:text-orange-400' : ''}
                    ${bmiCategory === 'Obese' ? 'text-red-600 dark:text-red-400' : ''}
                  `}>
                    {bmiCategory}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Calculator Form */}
          <div className="bg-background rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              CALCULATE YOUR BMI
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dui. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                calculateBMI();
              }}
              className="space-y-6"
            >
              {/* Height and Weight Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium mb-2">
                    Height / cm
                  </label>
                  <input
                    id="height"
                    type="number"
                    inputMode="numeric"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="170"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium mb-2">
                    Weight / kg
                  </label>
                  <input
                    id="weight"
                    type="number"
                    inputMode="numeric"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                  />
                </div>
              </div>

              {/* Age and Sex Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium mb-2">
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    inputMode="numeric"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="25"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <div>
                  <label htmlFor="sex" className="block text-sm font-medium mb-2">
                    Sex
                  </label>
                  <select
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Activity Factor */}
              <div>
                <label htmlFor="activity" className="block text-sm font-medium mb-2">
                  Select an activity factor:
                </label>
                <select
                  id="activity"
                  value={activityFactor}
                  onChange={(e) => setActivityFactor(e.target.value)}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select activity level</option>
                  <option value="sedentary">Sedentary (desk job or no exercise)</option>
                  <option value="light">Light (exercise 1-3 days/week)</option>
                  <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                  <option value="active">Active (exercise 6-7 days/week)</option>
                  <option value="very-active">Very Active (intense exercise daily)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                className="w-full sm:w-auto group bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-md font-semibold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                CALCULATE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
