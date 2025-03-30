"use client";
import React from 'react';

// A simplified stand-in component for the Globe
export default function SimpleGlobe() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black rounded-full relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <span className="text-sm">Globe visualization disabled</span>
        <br />
        <span className="text-xs opacity-70">Simplified for production build</span>
      </div>
    </div>
  )
}

// Export a simplified World component
export function World({ globeConfig, data }) {
  return (
    <div className="w-full h-full relative">
      <SimpleGlobe />
    </div>
  );
} 