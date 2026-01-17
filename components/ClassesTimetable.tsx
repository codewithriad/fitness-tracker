'use client';

import { useState } from 'react';

type ClassType = 'CYCLING' | 'CROSSFIT' | 'CARDIO' | 'BOX' | 'MEDITATION' | 'YOGA CLASSES' | 'BODY BALANCE';

interface ClassSchedule {
  name: string;
  time: string;
  instructor: string;
  day: string;
  startHour: number;
  color: string;
}

const classesData: ClassSchedule[] = [
  // Monday
  { name: 'CROSSFIT', time: '10:00 - 11:00', instructor: 'Matthew Olson', day: 'MONDAY', startHour: 10, color: 'bg-red-600' },
  { name: 'BOX', time: '12:00 - 13:00', instructor: 'Matthew Olson', day: 'MONDAY', startHour: 12, color: 'bg-emerald-600' },
  { name: 'CROSSFIT', time: '20:00 - 21:00', instructor: 'Armianda Yosia', day: 'MONDAY', startHour: 20, color: 'bg-red-600' },
  
  // Tuesday
  { name: 'CARDIO', time: '10:00 - 12:00', instructor: 'Shannon Mitchell', day: 'TUESDAY', startHour: 10, color: 'bg-blue-600' },
  { name: 'CROSSFIT', time: '12:00 - 13:00', instructor: 'Shannon Mitchell', day: 'TUESDAY', startHour: 12, color: 'bg-red-600' },
  { name: 'BODY BALANCE', time: '14:00 - 17:00', instructor: 'Shannon Mitchell', day: 'TUESDAY', startHour: 14, color: 'bg-blue-500' },
  
  // Wednesday
  { name: 'BOX', time: '10:00 - 11:00', instructor: 'Matthew Olson', day: 'WEDNESDAY', startHour: 10, color: 'bg-emerald-600' },
  { name: 'MEDITATION', time: '12:00 - 13:00', instructor: 'Matthew Olson', day: 'WEDNESDAY', startHour: 12, color: 'bg-gray-600' },
  { name: 'BOX', time: '14:00 - 17:00', instructor: 'Matthew Olson', day: 'WEDNESDAY', startHour: 14, color: 'bg-emerald-600' },
  { name: 'BODY BALANCE', time: '20:00 - 21:00', instructor: 'Jennifer Daris', day: 'WEDNESDAY', startHour: 20, color: 'bg-blue-500' },
  
  // Thursday
  { name: 'BODY BALANCE', time: '10:00 - 13:00', instructor: 'Robert Smith', day: 'THURSDAY', startHour: 10, color: 'bg-blue-500' },
  { name: 'BOX', time: '12:00 - 13:00', instructor: 'Matthew Olson', day: 'THURSDAY', startHour: 12, color: 'bg-emerald-600' },
  { name: 'CROSSFIT', time: '14:00 - 17:00', instructor: 'Armianda Yosia', day: 'THURSDAY', startHour: 14, color: 'bg-red-600' },
  
  // Friday
  { name: 'CROSSFIT', time: '12:00 - 14:00', instructor: 'Matthew Olson', day: 'FRIDAY', startHour: 12, color: 'bg-red-600' },
  { name: 'BODY BALANCE', time: '14:00 - 17:00', instructor: 'Brandon Pullstad', day: 'FRIDAY', startHour: 14, color: 'bg-blue-500' },
  { name: 'YOGA CLASSES', time: '20:00 - 21:00', instructor: 'Jennifer Daris', day: 'FRIDAY', startHour: 20, color: 'bg-purple-600' },
  
  // Saturday
  { name: 'CARDIO', time: '10:00 - 11:00', instructor: 'Shannon Patricia', day: 'SATURDAY', startHour: 10, color: 'bg-blue-600' },
  { name: 'BODY BALANCE', time: '12:00 - 13:00', instructor: 'Jennifer Daris', day: 'SATURDAY', startHour: 12, color: 'bg-blue-500' },
  { name: 'CARDIO', time: '16:00 - 18:00', instructor: 'Rondy Wecton', day: 'SATURDAY', startHour: 16, color: 'bg-blue-600' },
  { name: 'BODY BALANCE', time: '20:00 - 21:00', instructor: 'Jennifer Daris', day: 'SATURDAY', startHour: 20, color: 'bg-blue-500' },
  
  // Sunday
  { name: 'CROSSFIT', time: '12:00 - 13:00', instructor: 'Matthew Olson', day: 'SUNDAY', startHour: 12, color: 'bg-red-600' },
  { name: 'CARDIO', time: '14:00 - 17:00', instructor: 'Rondy Wecton', day: 'SUNDAY', startHour: 14, color: 'bg-blue-600' },
  { name: 'BOX', time: '16:00 - 18:00', instructor: 'Matthew Olson', day: 'SUNDAY', startHour: 16, color: 'bg-emerald-600' },
];

const categories: ClassType[] = ['CYCLING', 'CROSSFIT', 'CARDIO', 'BOX', 'MEDITATION', 'YOGA CLASSES', 'BODY BALANCE'];
const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
const timeSlots = [10, 12, 14, 16, 18, 20];

const ClassesTimetable = () => {
  const [selectedCategory, setSelectedCategory] = useState<ClassType | 'ALL'>('ALL');

  const filteredClasses = selectedCategory === 'ALL' 
    ? classesData 
    : classesData.filter(cls => cls.name === selectedCategory);

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 tracking-wide">
          CLASSES TIMETABLE
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === 'ALL'
                ? 'bg-red-600 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timetable - Desktop View */}
        <div className="hidden lg:block overflow-x-auto overflow-y-hidden">
          <div className="min-w-[900px]">
            {/* Days Header */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="text-center"></div>
              {days.map((day) => (
                <div key={day} className="text-center text-white font-semibold text-sm uppercase tracking-wider py-3">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              {timeSlots.map((hour) => (
                <div key={hour} className="grid grid-cols-8 gap-2 items-start">
                  {/* Time Label */}
                  <div className="text-white font-semibold text-sm text-right pr-4 pt-2">
                    {hour}:00
                  </div>

                  {/* Classes for each day */}
                  {days.map((day) => {
                    const dayClasses = filteredClasses.filter(
                      (cls) => cls.day === day && cls.startHour === hour
                    );

                    return (
                      <div key={`${day}-${hour}`} className="min-h-[60px]">
                        {dayClasses.map((cls, idx) => (
                          <div
                            key={idx}
                            className={`${cls.color} p-3 rounded-md shadow-lg transition-transform hover:scale-105 hover:shadow-xl`}
                          >
                            <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-1">
                              {cls.name}
                            </h4>
                            <p className="text-white/90 text-xs font-medium mb-0.5">{cls.time}</p>
                            <p className="text-white/70 text-xs">{cls.instructor}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Dotted Lines */}
            <div className="relative mt-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="border-t border-dotted border-gray-600/50 absolute w-full"
                  style={{ top: `${i * 76}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timetable - Mobile View */}
        <div className="lg:hidden space-y-6">
          {days.map((day) => (
            <div key={day} className="bg-gray-800/50 rounded-lg p-4 md:p-6">
              <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide mb-4 border-b border-gray-700 pb-2">
                {day}
              </h3>
              <div className="space-y-3">
                {timeSlots.map((hour) => {
                  const dayClasses = filteredClasses.filter(
                    (cls) => cls.day === day && cls.startHour === hour
                  );

                  if (dayClasses.length === 0) return null;

                  return (
                    <div key={hour}>
                      <div className="text-gray-400 text-sm font-semibold mb-2">{hour}:00</div>
                      {dayClasses.map((cls, idx) => (
                        <div
                          key={idx}
                          className={`${cls.color} p-4 rounded-md shadow-lg mb-2`}
                        >
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                            {cls.name}
                          </h4>
                          <p className="text-white/90 text-sm font-medium mb-0.5">{cls.time}</p>
                          <p className="text-white/70 text-sm">{cls.instructor}</p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesTimetable;
