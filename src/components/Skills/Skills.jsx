import React from "react";
import SkillCard from "./SkillCard";
// Importando os ícones necessários para a nova lista
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiAxios,
  SiFramer,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="bg-retro-dark-grey py-20 px-8">
      <div className="container mx-auto text-white">
        <h2 className="text-center mb-12 text-2xl md:text-3xl font-press-start text-retro-electric-blue animate-pulse-glow">
          HABILIDADES: SKILLS & PERKS
        </h2>

        {/* Back-End Skills */}
        <h3 className="font-press-start text-retro-neon-green mb-8 text-center text-xl">
          Back-End
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-center">
          <SkillCard
            icon={<FaNodeJs />}
            title="Node.js"
            level="Intermediário"
          />
          <SkillCard
            icon={<SiExpress />}
            title="Express.js"
            level="Intermediário"
          />
          <SkillCard icon={<SiMongodb />} title="MongoDB" level="Básico" />
          <SkillCard icon={<TbApi />} title="APIs RESTful" level="Básico" />
        </div>

        {/* Frontend Skills */}
        <h3 className="font-press-start text-retro-vibrant-red mb-8 text-center text-xl">
          Front-End
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <SkillCard
            icon={<FaReact />}
            title="React"
            level="Intermediário"
            borderColor="border-retro-vibrant-red"
          />
          <SkillCard
            icon={<SiTailwindcss />}
            title="Tailwind CSS"
            level="Avançado"
            borderColor="border-retro-vibrant-red"
          />
          <SkillCard
            icon={<SiFramer />}
            title="Framer Motion"
            level="Iniciante"
            borderColor="border-retro-vibrant-red"
          />
          <SkillCard
            icon={<SiAxios />}
            title="Axios"
            level="Básico"
            borderColor="border-retro-vibrant-red"
          />
          <SkillCard
            icon={<FaBootstrap />}
            title="Bootstrap"
            level="Avançado"
            borderColor="border-retro-vibrant-red"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
