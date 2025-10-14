# Portfólio Retrô - Felipe Coelho Rodrigues da Silva

Bem-vindo ao meu portfólio de desenvolvedor web, uma experiência imersiva inspirada na estética e nostalgia dos jogos retrô dos anos 80 e 90! Este site foi construído com foco em interfaces criativas, responsividade e acessibilidade, utilizando tecnologias web padrão.

## 🎮 Tema e Estilo Visual

O design deste portfólio é uma homenagem aos clássicos consoles como Super Nintendo, Sega Genesis e Arcades. Você encontrará elementos visuais como:

* **Pixel Art e Estética Arcade**: Bordas pixeladas, ícones e layouts que remetem a telas de jogos antigos.
* **HUD (Head-Up Display)**: O cabeçalho foi projetado para simular um HUD de jogo, com nome de usuário e status online.
* **Botões com Efeito Neon**: Botões interativos com brilhos e transições que evocam luzes de néon de fliperamas.
* **Fontes Monospace/Pixeladas**: Uso das fontes "Press Start 2P" e "Orbitron" para reforçar a sensação retrô e futurista.
* **Paleta de Cores Vibrante**: Uma combinação de azul elétrico, roxo, verde neon, preto, cinza escuro e vermelho vibrante.
* **Animações e Efeitos Leves**: Brilhos (glow), efeitos de glitch sutis e transições rápidas para uma experiência dinâmica.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando apenas tecnologias front-end puras e o framework Bootstrap, garantindo leveza e alto desempenho:

* **HTML5**: Estrutura semântica do conteúdo.
* **CSS3**: Estilização completa, incluindo responsividade, animações e efeitos visuais customizados.
* **JavaScript Puro**: Interatividade, rolagem suave, toggle de dark/light mode e validação de formulário.
* **Bootstrap 5**: Framework CSS para agilizar o desenvolvimento responsivo, altamente customizado para não parecer genérico.
* **Google Fonts**: Para as fontes "Press Start 2P" e "Orbitron".
* **Font Awesome**: Para os ícones.
* **Formspree**: Serviço para o envio de formulários de contato sem a necessidade de um backend próprio.

## 🧱 Estrutura do Site (Single Page Application - SPA)

O site é uma SPA, com navegação suave entre as seguintes seções:

1.  **Header/Navegação ("HUD de Jogo")**: Contém o nome do "jogador", status e botões de navegação. Inclui um botão de toggle para alternar entre os modos Dark e Light.
2.  **Sobre Mim ("Ficha de Jogador")**: Apresentação pessoal, informações de contato e links para redes sociais, estilizada como um painel de "Player Stats".
3.  **Habilidades ("Skills e Perks")**: Lista as competências técnicas do Felipe com barras de progresso ou ícones em estilo RPG.
4.  **Projetos ("Missões Concluídas")**: Exibe os projetos em cards que simulam cartuchos de jogo ou telas de fases, com detalhes e links.
5.  **Contato ("Terminal de Comunicação")**: Um formulário de contato funcional (integrado com Formspree) com validação em tempo real e mensagens de feedback estilizadas.

## 📱 Responsividade e Acessibilidade

O layout é 100% responsivo, adaptando-se perfeitamente a desktops, tablets e smartphones. Em dispositivos móveis, um menu hambúrguer facilita a navegação. A acessibilidade foi uma prioridade, com o uso de HTML semântico, suporte para navegação por teclado e otimização para leitores de tela.

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina:

1.  **Clone o Repositório (ou baixe os arquivos):**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd SEU_REPOSITORIO
    ```
    *(Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelo seu próprio link, caso já tenha hospedado no GitHub. Caso contrário, apenas crie a pasta e copie os arquivos.)*

2.  **Estrutura de Pastas:**
    Certifique-se de que a estrutura de arquivos e pastas esteja correta:
    ```
    seu-projeto/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── img/
    │   ├── avatar-placeholder.png
    │   └── project-placeholder.png
    │   └── retro-bg-placeholder.gif (Opcional)
    ├── index.html
    └── README.md
    ```

3.  **Abra com o Live Server (Recomendado):**
    A forma mais fácil de visualizar o projeto é utilizando a extensão "Live Server" no Visual Studio Code.
    * Instale a extensão "Live Server" no VS Code.
    * Abra o arquivo `index.html` no VS Code.
    * Clique com o botão direito no `index.html` e selecione "Open with Live Server".

    Se preferir, você pode simplesmente abrir o arquivo `index.html` diretamente no seu navegador.

4.  **Configuração do Formulário de Contato (Formspree):**
    Para que o formulário de contato funcione, você precisará de um hash do [Formspree](https://formspree.io/).
    * Vá para [formspree.io](https://formspree.io/) e crie uma conta gratuita.
    * Crie um novo formulário e copie o "hash" (ex: `f/abcdefg`).
    * Abra o arquivo `index.html` e localize a linha do formulário:
        ```html
        <form id="contactForm" action="[https://formspree.io/f/YOUR_FORMSPREE_HASH](https://formspree.io/f/YOUR_FORMSPREE_HASH)" method="POST">
        ```
    * Substitua `YOUR_FORMSPREE_HASH` pelo seu hash real do Formspree.

## 📸 Screenshots

*(Aqui você pode adicionar screenshots do seu site para ilustrar o design retrô. Ex: uma imagem do header, uma da seção de projetos, e uma do formulário de contato.)*

## Contato

Felipe Coelho Rodrigues da Silva
* Email: felipe.coelho@example.com (Este é um placeholder, por favor, atualize!)
* LinkedIn: [linkedin.com/in/felipecoelhorodriguesdasilva](https://www.linkedin.com/in/felipecoelhorodriguesdasilva) (Atualize com o seu)
* GitHub: [github.com/felipecoelhorodriguesdasilva](https://github.com/felipecoelhorodriguesdasilva) (Atualize com o seu)

---