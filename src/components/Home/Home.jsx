import React from "react";
// NOME CORRIGIDO PARA MINÚSCULAS
import backgroundImage from "../../assets/fundo01.png";
import TetrisAnimation from "./TetrisAnimation.jsx";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center min-h-screen p-8 pixel-border"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TetrisAnimation />

      <div className="container text-white z-10">
        <h1 className="text-4xl md:text-5xl font-press-start animate-pulse-glow animate-glitch">
          BEM-VINDO, PLAYER!
        </h1>
        <p className="text-lg mt-4 font-orbitron">
          Sou Desenvolvedor Full-Stack e neste espaço você poderá encontrar
          minhas habilidades e meus principais trabalhos, com foco em criar APIs
          robustas com Node.js e interfaces dinâmicas com React.
        </p>
        <a
          href="#about"
          className="inline-block mt-8 px-8 py-4 bg-retro-vibrant-red text-retro-black font-press-start uppercase text-lg border-2 border-retro-vibrant-red shadow-[0_0_10px_#ff073a,0_0_20px_#ff073a] transition-all duration-300 hover:bg-retro-neon-green hover:border-retro-neon-green hover:text-retro-black hover:shadow-[0_0_15px_#39ff14,0_0_25px_#39ff14] transform hover:-translate-y-0.5 animate-button-pulse"
        >
          Conectar
        </a>
      </div>
    </section>
  );
};

export default Home;
