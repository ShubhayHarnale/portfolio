"use client";

import { navItems } from "../data";
import { Suspense, lazy } from 'react';

// Static components
import Footer from "../components/Footer";

// Dynamic imports for components that use browser APIs
const Hero = lazy(() => import("../components/Hero"));
const Grid = lazy(() => import("../components/Grid"));
const FloatingNav = lazy(() => import("../components/ui/FloatingNav").then(mod => ({ default: mod.FloatingNav })));
const RecentProjects = lazy(() => import("../components/RecentProjects"));
const Experience = lazy(() => import("../components/Experience"));

// Loading fallbacks
const LoadingUI = () => <div className="h-screen w-full bg-black flex items-center justify-center">
  <div className="text-white">Loading...</div>
</div>;

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Suspense fallback={<LoadingUI />}>
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <Experience />
          <RecentProjects />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;

// Force dynamic rendering
export const dynamic = "force-dynamic";
