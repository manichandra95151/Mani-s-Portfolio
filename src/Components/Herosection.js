import React from "react";
import AnimationSkills from "./Elements/Animation.js";

export default function HeroSec() {
  return (
    <main className="flex-1 flex items-start justify-start"> {/* Align items to the top-left */}
      <div className="max-w-3xl text-left space-y-4"> {/* Align text to the left */}
        <div className="flex flex-col items-start justify-start space-y-4"> {/* Align items to the left */}
          <h1 className="text-5xl font-bold text-white">Hi, I'm Mani Chandra</h1>
          <p className="text-lg text-gray-300">I build <AnimationSkills/></p>
          <p className="text-base text-lightdark">
            I'm a tech enthusiast, certified full-stack web developer, and coder passionate about creating seamless digital experiences.
            I specialize in web development, blending creativity and technology to build impactful solutions.
            Beyond coding, I enjoy exploring new innovations in AI and modern web frameworks.
            Let’s connect and build something amazing together!
          </p>
        </div>
      </div>
    </main>
  );
}