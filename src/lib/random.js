// Função para gerar delays e direções aleatórias apenas no cliente
export function getRandomDelay() {
    return Math.random() * 0.6 + 0.2; // Delay entre 0.2 e 0.8 segundos
}

// Função para gerar direções consistentes
export function getRandomDirection() {
    return { x: 0, y: 20 }; // Direção consistente (baixo para cima)
}

// Animação com direções aleatórias (usada apenas no cliente)
export const fadeInRandom = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Stagger container (usada apenas no cliente)
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
        opacity: 1,
        transition: {
            staggerChildren: getRandomDelay(),
        },
    }),
};
