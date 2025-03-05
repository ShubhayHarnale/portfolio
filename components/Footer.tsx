import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-4 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-white-200 md:mt-10 my-5 text-center">
          
        </p>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Shubhay Harnale
        </p>
      </div>
    </footer>
  );
};

export default Footer;