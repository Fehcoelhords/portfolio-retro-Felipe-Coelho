import React from "react";
import ProjectCard from "./ProjectCard";
import imgAdvogado from "../../assets/foto02_projeto.jpeg";
import imgOmega from "../../assets/banner_2.jpg";
import imgTodoList from "../../assets/foto01_projeto.jpg";

const Projects = () => {
  const projectList = [
    {
      image: imgAdvogado,
      title: "Site para Advogado",
      description:
        "Criação de site em React com design totalmente responsivo, animações com Framer Motion e formulário de contato funcional.",
      tech: "React, Framer Motion, Tailwind CSS",
      liveUrl: "https://dr.advdavifelixazevedo.com",
    },
    {
      image: imgOmega,
      title: "Website Omega Recycling Brasil",
      description:
        "Migração de um site estático para uma aplicação React moderna e performática, reconstruída do zero com foco em performance.",
      tech: "React, Vite, Tailwind CSS",
      liveUrl: "https://omega-recycling-react.netlify.app/",
    },
    {
      image: imgTodoList,
      title: "API de Lista de Tarefas (To-Do)",
      description:
        "API RESTful completa com autenticação para gerenciamento de tarefas. Inclui operações de CRUD para usuários e tarefas.",
      tech: "Node.js, Express, MongoDB",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="bg-retro-dark-grey py-20 px-8">
      <div className="container mx-auto text-white">
        <h2 className="text-center mb-12 text-2xl md:text-3xl font-press-start text-retro-electric-blue animate-pulse-glow">
          PROJETOS: MISSÕES CONCLUÍDAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

// --- CORREÇÃO FINAL ESTÁ AQUI ---
export default Projects;
