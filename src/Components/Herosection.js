import React from "react";
import AnimationSkills from "./Elements/Animation.js";
import { FaLink } from "react-icons/fa6"; // Import the icon

export default function HeroSec() {
  return (
    <main className="flex-1 flex items-start justify-start mt-16 md:mt-0"> {/* Add margin-top for mobile */}
      <div className="max-w-3xl text-left space-y-4"> {/* Align text to the left */}
        <div className="flex flex-col items-start justify-start space-y-4"> {/* Align items to the left */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white ">Hi, I'm Mani Chandra</h1>
          <p className="text-lg text-gray-300">I build <AnimationSkills /></p>
          <p className="text-base text-lightdark">
            I'm a tech enthusiast, certified full-stack web developer, and coder passionate about creating seamless digital experiences.
            I specialize in web development, blending creativity and technology to build impactful solutions.
            Beyond coding, I enjoy exploring new innovations in AI and modern web frameworks.
            Let’s connect and build something amazing together!
          </p>

          {/* Button for downloading the resume */}
          <a
            href="/Resume (2).pdf" // Replace with the actual path to your resume file
            download="Mani_Chandra_Resume.pdf" // Customize the downloaded file name
            className="inline-flex items-center gap-2 px-4 py-2 text-lightdark  rounded-lg border-2 border-[rgba(38,38,38,0.5)] hover:border-[rgba(145,86,101,0.5)] transition-all duration-300 hover:text-gray-300"
          >
            <FaLink className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
