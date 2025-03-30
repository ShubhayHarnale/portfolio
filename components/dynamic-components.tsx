"use client";

import dynamic from "next/dynamic";

// Loading fallback
const LoadingUI = () => (
  <div className="h-screen w-full bg-black flex items-center justify-center">
    <div className="text-white">Loading...</div>
  </div>
);

// Dynamic imports for components that use browser APIs
export const Hero = dynamic(() => import("./Hero"), { 
  ssr: false,
  loading: LoadingUI
});

export const Grid = dynamic(() => import("./Grid"), {
  ssr: false,
  loading: LoadingUI
});

export const FloatingNav = dynamic(
  () => import("./ui/FloatingNav").then(mod => ({ default: mod.FloatingNav })),
  { ssr: false, loading: LoadingUI }
);

export const RecentProjects = dynamic(() => import("./RecentProjects"), {
  ssr: false,
  loading: LoadingUI
});

export const Experience = dynamic(() => import("./Experience"), {
  ssr: false,
  loading: LoadingUI
}); 