import React from "react";

import { workExperience } from "../data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="experiences" className="py-20 w-full">
      <h1 className="heading text-6xl font-bold mb-20">
        Work <span className="text-purple">Experience.</span>
      </h1>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple opacity-30"></div>
        
        {workExperience.map((card, index) => (
          <div key={card.id} className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black-100 border-2 border-purple flex items-center justify-center overflow-hidden">
              <img src={card.thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            
            {/* Date */}
            <div className={`absolute left-1/2 transform ${index % 2 === 0 ? 'translate-x-16' : '-translate-x-72'} text-gray-400 text-xl font-light tracking-wider`}>
              {index === 0 ? 'May 2022 - Aug 2024' : 'Jul 2019 - May 2022'}
            </div>

            {/* Content card */}
            <div className={`w-[45%] ${index % 2 === 0 ? 'pr-16' : 'pl-16'} bg-[rgb(4,7,29)] p-8 rounded-3xl border border-purple/20`}>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-300 mb-4">{card.title.split(',')[1]}</p>
              <ul className="list-disc pl-4 text-gray-300 space-y-2">
                {card.desc.split('.').filter(Boolean).map((point, i) => (
                  <li key={i}>{point.trim()}.</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;