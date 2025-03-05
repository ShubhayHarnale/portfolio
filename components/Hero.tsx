//import { FaLocationArrow } from "react-icons/fa6";

import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateUI";

const Hero = () => {
  return (
    <div className="pt-36">
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"  
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Engineering impactful digital solutions with modern frameworks 
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md: text-5xl lg:text-6xl "
            words="Bringing ideas to life with intuitive and scalable solutions"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Shubhay, a student at Rutgers University
          </p>
          <div className="flex gap-4">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/Shubhay_Harnale-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="View Resume"
                icon={<FaLocationArrow />}            
                position="right"
              />
            </a>
            <a href="https://www.linkedin.com/in/shubhay-harnale-54582119a/" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="LinkedIn"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* About Me Section */}
          <div className="mt-16 max-w-4xl text-left">
            <h3 className="uppercase tracking-widest text-sm text-gray-400 mb-4 pl-3">INTRODUCTION</h3>
            <h2 className="text-5xl font-bold mb-6">About Me.</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
            I'm Shubhay Harnale, a Computer Science student at Rutgers University, passionate about software development, cloud technologies, and startups. As the Co-founder & CTO of ChartUpp, I build solutions that connect small businesses with influencers using the MERN stack and RESTful APIs. Previously, I worked as a DevOps Engineer at Neutrino Tech Systems, handling AWS projects and developing CI/CD pipelines with Jenkins and GitLab. I thrive on problem-solving, innovation, and transforming ideas into impactful products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;