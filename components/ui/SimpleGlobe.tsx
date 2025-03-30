"use client";
import React from 'react';

interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface Position {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

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
export function World({ globeConfig, data }: WorldProps) {
  return (
    <div className="w-full h-full relative">
      <SimpleGlobe />
    </div>
  );
} 