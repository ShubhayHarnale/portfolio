"use client";

import { Suspense } from "react";
import { navItems } from "../data";
import Footer from "../components/Footer";
import { Hero, Grid, FloatingNav, RecentProjects, Experience } from "../components/dynamic-components";

// Loading fallback
const LoadingUI = () => (
  <div className="h-screen w-full bg-black flex items-center justify-center">
    <div className="text-white">Loading...</div>
  </div>
);

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
export const runtime = "edge";
