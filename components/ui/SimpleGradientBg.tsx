"use client";
import React from 'react';
import { cn } from "../../lib/utils";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  containerClassName,
  className,
  children,
}: BackgroundGradientAnimationProps) => {
  // Simple gradient background as a fallback for the 3D version
  return (
    <div
      className={cn(
        "w-full h-full absolute overflow-hidden top-0 left-0",
        containerClassName
      )}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
    >
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
      <div className="absolute inset-0 opacity-50 bg-black">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse" />
      </div>
    </div>
  );
}; 