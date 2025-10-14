document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll para navegação SPA (mantido)
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                    bsCollapse.hide();
                }

                const headerHeight = document.getElementById('header').offsetHeight;
                const offsetTop = targetElement.offsetTop - headerHeight - 10;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Ao clicar em um link de navegação, atualiza o hash na URL
                history.pushState(null, null, targetId); 
            }
        });
    });

    // Atualiza a classe 'active' nos links de navegação ao rolar (mantido)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(currentId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Dark/Light Mode Toggle (mantido)
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
        darkModeToggle.checked = (savedTheme === 'light');
    } else if (prefersDarkMode) {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        darkModeToggle.checked = false;
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Validação de formulario e Envio com Formspree (mantido)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        Array.from(contactForm.elements).forEach(element => {
            if (element.classList.contains('is-invalid')) {
                element.classList.remove('is-invalid');
            }
            if (element.classList.contains('is-valid')) {
                element.classList.remove('is-valid');
            }
            const feedbackElement = document.getElementById(`${element.id}Feedback`);
            if (feedbackElement) {
                feedbackElement.textContent = '';
            }
        });
        formStatus.classList.add('d-none');
        formStatus.classList.remove('success', 'error');
        formStatus.textContent = '';


        let isValid = true;

        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('is-invalid');
            document.getElementById('nameFeedback').textContent = 'Nome de Usuário é obrigatório!';
            isValid = false;
        } else {
            nameInput.classList.add('is-valid');
        }

        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailInput.classList.add('is-invalid');
            document.getElementById('emailFeedback').textContent = 'Endereço IP (Email) é obrigatório!';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            document.getElementById('emailFeedback').textContent = 'Formato de Email inválido. Tente user@domain.com!';
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
        }

        const subjectInput = document.getElementById('subject');
        if (subjectInput.value.trim() === '') {
            subjectInput.classList.add('is-invalid');
            document.getElementById('subjectFeedback').textContent = 'Assunto da Mensagem é obrigatório!';
            isValid = false;
        } else {
            subjectInput.classList.add('is-valid');
        }

        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            messageInput.classList.add('is-invalid');
            document.getElementById('messageFeedback').textContent = 'Mensagem Codificada é obrigatória!';
            isValid = false;
        } else {
            messageInput.classList.add('is-valid');
        }

        if (isValid) {
            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.classList.remove('d-none');
                    formStatus.classList.add('success');
                    formStatus.textContent = 'MENSAGEM ENVIADA! Aguarde a resposta.';
                    contactForm.reset();
                    Array.from(contactForm.elements).forEach(element => {
                        element.classList.remove('is-valid');
                    });
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        formStatus.classList.remove('d-none');
                        formStatus.classList.add('error');
                        formStatus.textContent = 'ERRO NA TRANSMISSÃO! ' + data.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.classList.remove('d-none');
                        formStatus.classList.add('error');
                        formStatus.textContent = 'ERRO DESCONHECIDO! Tente novamente.';
                    }
                }
            } catch (error) {
                formStatus.classList.remove('d-none');
                formStatus.classList.add('error');
                formStatus.textContent = 'ERRO DE CONEXÃO! Verifique sua rede.';
                console.error('Erro ao enviar formulário:', error);
            }
        }
    });

    // --- Lógica da Cena 2d retro para a seção 'about' ---
    const showDialogBtn = document.getElementById('showDialogBtn');
    const dialogBox = document.getElementById('dialogBox');
    const dialogTextElement = document.getElementById('dialogText');
    const dialogArrow = document.getElementById('dialogArrow');
    const sceneIntroInitial = document.querySelector('.scene-intro-initial');
    const playerDataUnlocked = document.getElementById('playerDataUnlocked');
    const aboutSection = document.getElementById('about');

    const fullDialogText = `Olá! Sou Felipe_Coelho,\n Sou um Desenvolvedor Front-End em formacao
e freelancer. Meu foco e a criacao de
interfaces responsivas, seguras e intuitivas.
Com conhecimento em Seg. da Informacao (XSS, LGPD).
 \nClique na seta para ver minha ficha completa!`;
    let charIndex = 0;
    let typingSpeed = 30;
    let typingInterval = null;

    // A função para inicializar o estado da cena 'about' ao carregar a página
    // Agora SEMPRE reseta para o estado inicial ao carregar.
    function initializeAboutSceneState() {
        sceneIntroInitial.classList.remove('d-none');
        dialogBox.classList.add('d-none');
        playerDataUnlocked.classList.add('d-none');
        playerDataUnlocked.classList.remove('show');
        dialogTextElement.textContent = '';
        charIndex = 0;
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    }

    // Função para simular o efeito de digitação
    function typeWriterEffect(text, element, callback) {
        if (typingInterval) {
            clearInterval(typingInterval);
        }
        charIndex = 0;
        element.textContent = '';

        typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                typingInterval = null;
                if (callback) callback();
            }
        }, typingSpeed);
    }

    // Função para iniciar a sequência da caixa de diálogo
    function startDialogSequence() {
        sceneIntroInitial.classList.add('d-none');
        
        dialogBox.classList.remove('d-none');
        dialogArrow.style.display = 'none';
        dialogBox.style.cursor = 'default';

        typeWriterEffect(fullDialogText, dialogTextElement, () => {
            dialogArrow.style.display = 'block';
            dialogBox.style.cursor = 'pointer';

            const clickToContinueHandler = (e) => {
                e.preventDefault();
                e.stopPropagation();

                dialogBox.removeEventListener('click', clickToContinueHandler);
                dialogBox.classList.add('d-none');

                playerDataUnlocked.classList.remove('d-none');
                setTimeout(() => {
                    playerDataUnlocked.classList.add('show');

                    playerDataUnlocked.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    const headerHeight = document.getElementById('header').offsetHeight;
                    if (headerHeight > 0) {
                        window.scrollBy(0, -headerHeight - 10);
                    }

                }, 50);
            };
            dialogBox.addEventListener('click', clickToContinueHandler);
        });
    }

    // Event Listener para o botão "Conheça o programador"
    showDialogBtn.addEventListener('click', startDialogSequence);

    // Observer para a seção 'about'
    const aboutSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!aboutSection.classList.contains('scene-played')) {
                    initializeAboutSceneState();
                    aboutSection.classList.add('scene-played');
                }
            } else {
                // Não resetamos o estado ao sair da viewport para manter a experiência na sessão.
                // O reset acontece apenas no carregamento da página.
            }
        });
    }, { rootMargin: "0px 0px -80% 0px" });

    aboutSectionObserver.observe(aboutSection);

    // --- Efeito Tetris para a seção HOME ---
    const tetrisContainer = document.getElementById('tetrisBlocksContainer');
    let tetrisBlockSize = 30; // Valor padrão
    try {
        const rootStyles = getComputedStyle(document.documentElement);
        const cssBlockSize = rootStyles.getPropertyValue('--tetris-block-size').trim();
        if (cssBlockSize) {
            tetrisBlockSize = parseInt(cssBlockSize.replace('px', '')); // Garante que 'px' seja removido
        }
    } catch (e) {
        console.warn("Não foi possível obter --tetris-block-size do CSS. Usando valor padrão de 30px.");
    }
    
    // Cores dos blocos Tetris (corrigido para usar os valores RGB/Hex diretos do CSS)
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-1').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-2').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-3').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-4').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-5').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-6').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--tetris-color-7').trim()
    ];

    let blockGenerationInterval = null; // Para controlar o setInterval

    function createTetrisBlock() {
        if (!tetrisContainer) return;

        const block = document.createElement('div');
        block.classList.add('tetris-block');
        
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        block.style.backgroundColor = colors[randomColorIndex];
        block.style.color = colors[randomColorIndex]; // Define color para currentColor do box-shadow

        const containerWidth = tetrisContainer.offsetWidth;
        const randomLeft = Math.floor(Math.random() * (containerWidth / tetrisBlockSize)) * tetrisBlockSize;
        block.style.left = `${randomLeft}px`;

        const fallDuration = Math.random() * (4 - 2) + 2; // Entre 2 e 4 segundos 9rápido)
        block.style.animation = `fall ${fallDuration}s linear forwards`;

        tetrisContainer.appendChild(block);

        block.addEventListener('animationend', () => {
            block.remove();
        });
    }

    // Inicia a geração dos blocos apenas quando a seção HOME está visível
    const homeSection = document.getElementById('home');
    const homeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!blockGenerationInterval) {
                    blockGenerationInterval = setInterval(createTetrisBlock, 300); // Gera um bloco a cada 0.3s 
                }
            } else {
                if (blockGenerationInterval) {
                    clearInterval(blockGenerationInterval);
                    blockGenerationInterval = null;
                }
                tetrisContainer.innerHTML = ''; // Limpa todos os blocos ao sair
            }
        });
    }, { threshold: 0.1 });

    homeObserver.observe(homeSection);

    // --- LÓGICA DE CARREGAMENTO INICIAL DA PÁGINA ---
    // Esta parte é a chave para garantir que a página comece sempre no topo.
    window.onload = function() { // Usa window.onload para garantir que tudo foi carregado
        window.scrollTo({
            top: 0,
            behavior: 'auto' // Comportamento 'auto' é instantâneo para recarregamento
        });
             };
    initializeAboutSceneState(); // Chamada aqui para garantir o estado inicial de "Sobre Mim"
});