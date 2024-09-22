import React from "react";
import { FiGithub } from "react-icons/fi"; // GitHub icon
import { projectData } from "../Data/Projectdata"; // Import the project data

export default function MyProjects() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <h2 className="text-lg font-bold text-black mb-8 bg-[rgba(250,250,250,1)]  rounded-lg p-1 text-center max-w-xs mx-auto">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-customDark rounded-lg overflow-hidden border-2 border-[rgba(38,38,38,0.5)] hover:border-[rgba(145,86,101,0.5)] transition-all duration-300"
          >
            <div className="relative">
              <img
                src={project.image} // Render the image dynamically
                alt={project.name} // Dynamically set alt text
                width={410}
                height={300}
                className="w-full h-auto object-contain transition-all duration-300"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4 ">{project.description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github} // GitHub link from data
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white border border-[rgba(241,241,241,0.5)] shadow transition-colors hover:text-zinc-400 bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <FiGithub className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink} // Live link from data
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(241,241,241,0.5)] text-white bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:text-zinc-400 bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







