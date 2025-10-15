import React from "react";
import ProjectCard from "./ProjectCard";
import imgAdvogado from "../../assets/foto02_projeto.jpeg";
import imgOmega from "../../assets/foto01_projeto.jpg";

const Projects = () => {
  const projectList = [
    {
      image: imgAdvogado,
      title: "Site para Advogado",
      // DESCRIÇÃO ATUALIZADA AQUI
      description:
        "Criação de site em React com design totalmente responsivo. Implementação de animações (Framer Motion) para uma boa experiência do usuário, com destaque para a linha do tempo interativa e cards com efeito 3D.",
      // TECNOLOGIAS ATUALIZADAS AQUI
      tech: "React, Framer Motion, Tailwind CSS, Formspree",
      liveUrl: "https://dr.advdavifelixazevedo.com",
    },
    {
      image: imgOmega,
      title: "API de Lista de Tarefas com Autenticação",
      description:
        "Construção de uma API RESTful completa para um aplicativo de gerenciamento de tarefas. O projeto implementa um sistema de autenticação seguro com JWT, garantindo que cada usuário possa criar, ler, atualizar e deletar apenas suas próprias tarefas.",
      tech: " Node.js, Express.js, MongoDB, Mongoose, JSON Web Token (JWT), bcryptjs.",
      liveUrl: "https://github.com/Fehcoelhords/todo-list-api",
    },
  ];

  return (
    <section id="projects" className="bg-retro-dark-grey py-20 px-8">
      <div className="container mx-auto text-white">
        <h2 className="text-center mb-12 text-2xl md:text-3xl font-press-start text-retro-electric-blue animate-pulse-glow">
          PROJETOS: MISSÕES CONCLUÍDAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
