import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("MENSAGEM ENVIADA! Aguarde a resposta.");
        form.reset();
      } else {
        setStatus("ERRO NA TRANSMISSÃO! Tente novamente.");
      }
    } catch (error) {
      setStatus("ERRO DE CONEXÃO! Verifique sua rede.");
    }
  };

  return (
    <section id="contact" className="bg-retro-dark-grey py-20 px-8">
      <div className="container mx-auto text-white">
        <h2 className="text-center mb-12 text-2xl md:text-3xl font-press-start text-retro-electric-blue animate-pulse-glow">
          CONTATO: TERMINAL DE COMUNICAÇÃO
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-black bg-opacity-80 border-2 border-retro-vibrant-red shadow-[0_0_15px_#ff073a] p-8">
            <h3 className="font-orbitron text-retro-vibrant-red mb-6 text-xl">
              INICIAR COMUNICAÇÃO
            </h3>
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_HASH" // <-- SUBSTITUA PELO SEU HASH
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-orbitron text-retro-neon-green mb-2"
                >
                  Nome de Usuário:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-retro-black text-retro-neon-green border-2 border-retro-electric-blue p-3 focus:border-retro-neon-green focus:shadow-[0_0_10px_#39ff14] outline-none transition-all"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-orbitron text-retro-neon-green mb-2"
                >
                  Endereço IP (Email):
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-retro-black text-retro-neon-green border-2 border-retro-electric-blue p-3 focus:border-retro-neon-green focus:shadow-[0_0_10px_#39ff14] outline-none transition-all"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block font-orbitron text-retro-neon-green mb-2"
                >
                  Assunto da Mensagem:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  required
                  className="w-full bg-retro-black text-retro-neon-green border-2 border-retro-electric-blue p-3 focus:border-retro-neon-green focus:shadow-[0_0_10px_#39ff14] outline-none transition-all"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-orbitron text-retro-neon-green mb-2"
                >
                  Mensagem Codificada:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-retro-black text-retro-neon-green border-2 border-retro-electric-blue p-3 focus:border-retro-neon-green focus:shadow-[0_0_10px_#39ff14] outline-none transition-all"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-retro-vibrant-red text-retro-black font-press-start uppercase text-lg border-2 border-retro-vibrant-red shadow-[0_0_10px_#ff073a,0_0_20px_#ff073a] transition-all duration-300 hover:bg-retro-neon-green hover:border-retro-neon-green hover:text-retro-black hover:shadow-[0_0_15px_#39ff14,0_0_25px_#39ff14] transform hover:-translate-y-0.5 animate-button-pulse"
                >
                  TRANSMITIR MENSAGEM
                </button>
              </div>
              {status && (
                <div
                  className={`mt-4 text-center p-3 font-press-start text-sm ${
                    status.includes("ERRO")
                      ? "bg-red-900 border-retro-vibrant-red text-retro-vibrant-red"
                      : "bg-green-900 border-retro-neon-green text-retro-neon-green"
                  } border-2`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
