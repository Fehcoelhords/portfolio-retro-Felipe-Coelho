import React, { useState, useEffect, useRef } from "react";

// Cores para os blocos de Tetris
const colors = [
  "#00a0e9", // Azul claro
  "#ff7f00", // Laranja
  "#c800ff", // Roxo
  "#00ff00", // Verde limão
  "#ff0000", // Vermelho
  "#ffff00", // Amarelo
  "#00ffff", // Ciano
];

const TetrisAnimation = () => {
  const [blocks, setBlocks] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const generateBlock = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const blockWidth = 32; // Corresponde a w-8 no Tailwind

      const newBlock = {
        id: Date.now() + Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * (containerWidth - blockWidth), // Posição horizontal aleatória
        duration: Math.random() * 5 + 7, // Duração da queda entre 7 e 12 segundos
      };

      setBlocks((prevBlocks) => {
        // Limita o número de blocos para performance
        const maxBlocks = 40;
        const updatedBlocks = [...prevBlocks, newBlock];
        return updatedBlocks.slice(
          Math.max(updatedBlocks.length - maxBlocks, 0)
        );
      });
    };

    // Gera um novo bloco a cada X milissegundos
    const intervalId = setInterval(generateBlock, 400); // 400ms = 0.4 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const handleAnimationEnd = (id) => {
    // Remove o bloco do estado quando sua animação termina
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
    >
      {blocks.map((block) => (
        <div
          key={block.id}
          className="tetris-falling-block" // Nova classe CSS
          style={{
            backgroundColor: block.color,
            left: `${block.left}px`,
            animationDuration: `${block.duration}s`,
            boxShadow: `0 0 5px ${block.color}, 0 0 15px ${block.color}`,
          }}
          onAnimationEnd={() => handleAnimationEnd(block.id)}
        />
      ))}

      {/* CSS para a animação de queda, injetado diretamente */}
      <style jsx>{`
        .tetris-falling-block {
          position: absolute;
          width: 32px; /* w-8 */
          height: 32px; /* h-8 */
          border: 1px solid rgba(0, 0, 0, 0.5); /* Borda sutil */
          top: -32px; /* Começa acima da tela */
          animation-name: fallAnimation;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @keyframes fallAnimation {
          from {
            transform: translateY(0); /* Começa na posição inicial (topo) */
          }
          to {
            transform: translateY(
              calc(100vh + 32px)
            ); /* Cai até sair completamente da tela */
          }
        }
      `}</style>
    </div>
  );
};

export default TetrisAnimation;
