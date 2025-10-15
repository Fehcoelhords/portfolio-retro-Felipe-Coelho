import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-retro-black py-6 text-center pixel-border-top">
      <div className="container mx-auto font-orbitron text-sm">
        <p>
          &copy; 2025 Felipe_Coelho. Todos os direitos reservados. | Design
          inspirado em games retrô.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Fehcoelhords"
            target="_blank"
            rel="noopener noreferrer"
            className="text-retro-light-grey text-3xl transition-transform duration-300 hover:text-retro-electric-blue hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-coelho-82943a311/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-retro-light-grey text-3xl transition-transform duration-300 hover:text-retro-electric-blue hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
