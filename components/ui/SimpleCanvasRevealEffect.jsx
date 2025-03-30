"use client";
import React from 'react';
import { cn } from "../../lib/utils";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  // Generate a grid of dots as a simple visual alternative to the Three.js version
  const getRandomOpacity = () => {
    const opacityLevels = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1];
    return opacityLevels[Math.floor(Math.random() * opacityLevels.length)];
  };
  
  const getColor = () => {
    const color = colors[0];
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };
  
  const dotSizeInPx = dotSize * 4; // Adjust for visual similarity
  const gridSize = 30; // Number of dots in each direction
  
  // Generate grid items for the effect
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const opacity = getRandomOpacity();
        const animationDelay = (Math.random() * 2) + 's';
        dots.push(
          <div 
            key={`${i}-${j}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: getColor(),
              width: `${dotSizeInPx}px`,
              height: `${dotSizeInPx}px`,
              opacity: opacity,
              left: `${(i / gridSize) * 100}%`,
              top: `${(j / gridSize) * 100}%`,
              animation: `simpleDotFade ${4 / animationSpeed}s infinite ${animationDelay}`,
            }}
          />
        );
      }
    }
    return dots;
  };
  
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full relative overflow-hidden">
        {renderDots()}
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
      
      {/* Add a style tag for the animation */}
      <style jsx global>{`
        @keyframes simpleDotFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}; 