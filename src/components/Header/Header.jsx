import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClassName =
    "block md:inline-block nav-link btn-arcade cursor-pointer text-center w-full md:w-auto";

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 bg-retro-black bg-opacity-90 border-b-2 border-retro-neon-green shadow-[0_5px_15px_-5px_rgba(57,255,20,0.5)]">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a className="text-white font-press-start text-lg" href="#home">
          <span className="hidden sm:inline">Felipe_Coelho</span>
          <span className="inline sm:hidden">F.Coelho</span>
          <span className="inline-block w-2.5 h-2.5 bg-retro-neon-green rounded-full ml-2 relative top-[-2px] shadow-[0_0_5px_#39ff14,0_0_10px_#39ff14] animate-ping-slow"></span>
        </a>

        {/* Links do Menu para Desktop */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-2">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={linkClassName}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Botão do Menu Mobile (Hambúrguer) */}
        <button
          className="md:hidden text-2xl text-retro-electric-blue"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-retro-black bg-opacity-95 mt-2 p-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className={linkClassName}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className={linkClassName}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className={linkClassName}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className={linkClassName}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className={linkClassName}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
