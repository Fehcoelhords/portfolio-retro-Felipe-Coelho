import React, { useState } from "react";
// NOMES CORRIGIDOS PARA MINÚSCULAS
import minhaFoto from "../../assets/minha_foto.jpg";
import trainerImg from "../../assets/trainer.png";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const About = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [playerDataVisible, setPlayerDataVisible] = useState(false);

  const handleShowDialog = () => {
    setDialogVisible(true);
  };

  const handleShowPlayerData = () => {
    setDialogVisible(false);
    setPlayerDataVisible(true);
  };

  return (
    <section
      id="about"
      className="relative bg-retro-dark-grey p-8 min-h-screen flex flex-col items-center justify-center overflow-hidden pixel-border"
    >
      {!dialogVisible && !playerDataVisible && (
        <div className="text-center z-10">
          <img
            src={trainerImg}
            alt="Personagem Trainer em Pixel Art"
            className="w-40 h-auto mx-auto animate-bounce"
            style={{ imageRendering: "pixelated" }}
          />
          <button
            onClick={handleShowDialog}
            className="mt-8 px-6 py-3 bg-retro-vibrant-red text-retro-black font-press-start uppercase text-sm border-2 border-retro-vibrant-red shadow-[0_0_10px_#ff073a,0_0_20px_#ff073a] transition-all duration-300 hover:bg-retro-neon-green hover:border-retro-neon-green hover:shadow-[0_0_15px_#39ff14,0_0_25px_#39ff14] transform hover:-translate-y-0.5"
          >
            Conheça o programador
          </button>
        </div>
      )}

      {dialogVisible && (
        <div
          className="bg-black bg-opacity-90 border-4 border-retro-light-grey p-6 w-11/12 max-w-3xl z-10 cursor-pointer"
          onClick={handleShowPlayerData}
        >
          <p className="text-retro-neon-green font-press-start text-sm md:text-base whitespace-pre-wrap leading-relaxed">
            Olá! Sou Felipe_Coelho, um Desenvolvedor Full-Stack focado em criar
            aplicações web seguras e de alta performance.
            {"\n\n"}
            Com Node.js e React, transformo ideias em realidade.
            {"\n\n"}
            Clique aqui para ver minha ficha completa!
          </p>
          <span className="block text-right mt-2 text-retro-electric-blue text-2xl animate-pulse">
            ▼
          </span>
        </div>
      )}

      {playerDataVisible && (
        <div className="container text-white py-5 z-10 w-full animate-[fadeIn_1s_ease-in-out]">
          <h2 className="text-center mb-10 text-2xl md:text-3xl font-press-start text-retro-electric-blue animate-pulse-glow">
            SOBRE MIM: FICHA DE JOGADOR
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center">
              <div className="w-48 h-48 mx-auto mb-4 border-4 border-retro-purple shadow-[0_0_10px_#9933ff,0_0_20px_#9933ff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={minhaFoto}
                  alt="Avatar de Felipe Coelho"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-orbitron">
                Nickname:{" "}
                <span className="text-retro-electric-blue">Felipe_Coelho</span>
              </p>
              <p className="font-orbitron">
                Classe:{" "}
                <span className="text-retro-neon-green">Dev Full-Stack</span>
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="bg-black bg-opacity-70 border-2 border-retro-electric-blue shadow-[0_0_10px_#00ffff] p-6">
                <h3 className="font-press-start text-retro-electric-blue mb-3">
                  PLAYER STATS
                </h3>
                <p className="font-orbitron text-sm md:text-base">
                  Desenvolvedor Full-Stack com experiência em projetos
                  freelancer, construindo aplicações web seguras e de boa
                  performance. No back-end, utilizo Node.js e Express.js para
                  criar APIs RESTful, com integração a bancos de dados MongoDB.
                  No front-end, desenvolvo interfaces dinâmicas e responsivas
                  com React e Tailwind CSS.
                </p>
                <h4 className="font-press-start text-retro-neon-green mt-4 mb-3 text-sm">
                  FORMAÇÃO ACADÊMICA
                </h4>
                <ul className="list-none font-orbitron text-sm md:text-base">
                  <li className="flex items-center gap-2">
                    <FaGraduationCap className="text-retro-electric-blue" />{" "}
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                  </li>
                  <li className="ml-6">UNINOVE – Conclusão: 06/2026</li>
                </ul>
                <h4 className="font-press-start text-retro-vibrant-red mt-4 mb-3 text-sm">
                  CONTATOS
                </h4>
                <ul className="list-none font-orbitron text-sm md:text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-retro-vibrant-red" /> São
                    Paulo, Brasil
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-retro-neon-green" />{" "}
                    fecoelho00@outlook.com
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLinkedin className="text-retro-electric-blue" />{" "}
                    <a
                      href="https://www.linkedin.com/in/felipe-coelho-82943a311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-retro-electric-blue"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGithub className="text-retro-purple" />{" "}
                    <a
                      href="https://github.com/Fehcoelhords"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-retro-electric-blue"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
