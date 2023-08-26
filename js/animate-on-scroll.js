// Função para criar um observador de animação
function createAnimationObserver(className) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        });
    });

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(el => observer.observe(el));
}

// Classes de animação
const animationClasses = [
    'animate-slide-to-right',
    'animate-slide-to-top',
    'animate-opacity',
    'animate-slide-to-top-and-opacity',
    'animate-slide-to-right-and-opacity'
];

// Criar observadores para cada classe de animação
animationClasses.forEach(className => createAnimationObserver(className));