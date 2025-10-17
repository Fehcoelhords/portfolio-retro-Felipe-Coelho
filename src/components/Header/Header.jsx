import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- NOVO ESTILO PARA OS LINKS ---
  // Base do botão: forma angular, fundo semi-transparente, borda neon
  const linkBaseClasses =
    "relative px-5 py-2 font-orbitron uppercase text-sm tracking-widest transition-all duration-300 cursor-pointer";
  // Efeito de hover: muda a cor do texto e ativa a animação da borda
  const linkHoverClasses = "hover:text-white hover:shadow-[0_0_15px_#00ffff]";

  // Classe para o link ativo (fornecida para o 'activeClass' do react-scroll)
  const activeLinkClasses = "active-link";

  return (
    <>
      {/* Elemento de estilo: adiciona um gradiente sutil no topo da página */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-retro-electric-blue/20 to-transparent pointer-events-none z-40"></div>

      <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black/50 backdrop-blur-sm border-b border-retro-electric-blue/30">
        <nav className="container mx-auto flex justify-between items-center px-4">
          {/* Logo com novo estilo */}
          <a
            className="text-white font-press-start text-xl drop-shadow-[0_0_8px_#00ffff] transition-transform hover:scale-105"
            href="#home"
          >
            Felipe_Coelho
            <span className="inline-block w-2 h-2 bg-retro-neon-green rounded-full ml-2 shadow-[0_0_8px_#39ff14] animate-pulse"></span>
          </a>

          {/* Links do Menu para Desktop com novo design */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={activeLinkClasses}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              Início
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={activeLinkClasses}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              Sobre Mim
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={activeLinkClasses}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              Habilidades
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={activeLinkClasses}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              Projetos
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={activeLinkClasses}
              className={`${linkBaseClasses} ${linkHoverClasses}`}
            >
              Contato
            </Link>
          </div>

          {/* Botão do Menu Mobile (Hambúrguer) */}
          <button
            className="md:hidden text-3xl text-retro-electric-blue"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Menu Mobile Dropdown com novo design */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 mt-4 p-4">
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className={linkBaseClasses}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className={linkBaseClasses}
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className={linkBaseClasses}
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className={linkBaseClasses}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  className={linkBaseClasses}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
