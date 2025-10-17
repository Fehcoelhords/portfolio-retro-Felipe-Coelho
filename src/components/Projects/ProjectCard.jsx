import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ image, title, description, tech, liveUrl }) => {
  return (
    <div className="bg-black bg-opacity-70 border-2 border-retro-vibrant-red h-full overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#00ffff] hover:border-retro-electric-blue">
      <img
        src={image}
        className="w-full h-48 object-cover border-b-2 border-retro-purple"
        alt={`Screenshot do projeto ${title}`}
      />
      <div className="p-6">
        <h3 className="font-press-start text-lg text-retro-electric-blue mb-3">
          {title}
        </h3>
        <p className="font-orbitron text-sm mb-4">{description}</p>
        <p className="font-orbitron text-xs text-retro-neon-green mb-6">
          Tecnologias: {tech}
        </p>
        <div className="text-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-retro-dark-grey text-retro-electric-blue font-press-start text-xs uppercase border-2 border-retro-electric-blue transition-all duration-300 hover:bg-retro-electric-blue hover:text-retro-black hover:shadow-[0_0_15px_#00ffff]"
          >
            <FaExternalLinkAlt />
            Ver Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
