import Head from "next/head";
import { Container } from "@/components/Container";
import {
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
} from "@/components/Icons";
import SocialLink from "@/components/SocialLinks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Dados dos cards
const cardData = [
    {
        title: "Desenvolvimento Web",
        description: "Criação de sites, landing pages e portfólios digitais, focados em design moderno e performance, indexado no Google e com painel de Analytics.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: true
    },
    {
        title: "Gestão de Mídias Sociais e Tráfego Pago",
        description: "Administração estratégica de redes sociais e campanhas publicitárias, visando alcance e engajamento.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: false
    },
    {
        title: "Desenvolvimento de Sistemas",
        description: "Projetos de software sob medida, atendendo a necessidades específicas de empresas e comunidades.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: true
    },
    {
        title: "Administração de Infraestrutura",
        description: "Gerenciamento de infraestrutura física e em nuvem (cloud), garantindo alta disponibilidade e segurança.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: false
    },
    {
        title: "Consultoria em Migração e Implantação de Dados",
        description: "Planejamento e execução de migrações de sistemas e infraestrutura, com foco em eficiência e confiabilidade.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: true
    },
    {
        title: "Identidade Visual e Movimentação Social",
        description: "Logotipo, posts, reels, stories, carousel, desenvolvido de acordo com o posicionamento do cliente.",
        image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80",
        imageFirst: false
    }
];

export default function Sobre() {
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        const toggleCursor = () => {
            setIsCursorVisible((prev) => !prev);
        };

        // Define o intervalo para o cursor piscante
        const cursorInterval = setInterval(toggleCursor, 500);

        // Limpar os intervalos ao desmontar o componente
        return () => {
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Portifólio Jean Patrick - Serviços</title>
                <meta name="description" content="Portifólio Jean Patrick - Serviços" />
            </Head>
            <Container className="mt-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-orange-800 dark:text-[#fe6054] sm:text-5xl">
                            Serviços
                        </h1>
                        <p className="mt-6 text-base text-zinc-800 dark:text-zinc-200">
                            {/* Descrição do serviço pode ser adicionada aqui */}
                        </p>
                        <div className="mt-6 flex gap-6">
                            <SocialLink
                                href="https://github.com/je4npw"
                                aria-label="Siga-me no Github"
                                icon={GitHubIcon}
                            />
                            <SocialLink
                                href="https://linkedin.com/in/je4npw/"
                                aria-label="Siga-me no LinkedIn"
                                icon={LinkedInIcon}
                            />
                            <SocialLink
                                href="https://www.instagram.com/je4npw/"
                                aria-label="Siga-me no Instagram"
                                icon={InstagramIcon}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 border shadow-md border-red-600 hover:border-red-800 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ff6255]">
                        <div className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        </div>
                        <div className="bg-gray-700 border-t-0 w-full text-gray-200 p-2 rounded-b-lg">
                            [root@localhost]# Meu trabalho consiste em compreender as demandas
                            dos clientes e auxiliar a automatizar seus processos. Para isso
                            ofereço os seguintes serviços:
                            <span className={isCursorVisible ? "" : "hidden"}>|</span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="mt-24 md:mt-28">
                <div className="border-t border-zinc-100 pt-10 my-12 pb-16 dark:border-zinc-700/40">
                    <div className="text-base text-zinc-600 dark:text-zinc-200">
                        {/* Cards com imagem e animação de hover */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cardData.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className={`rounded-lg p-3 flex flex-col md:flex-row gap-4 items-center transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ff6255]`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {card.imageFirst ? (
                                        <>
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="rounded-lg md:w-1/2 object-cover"
                                            />
                                            <div className="text-center md:text-left">
                                                <b>{card.title}: </b>
                                                {card.description}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="text-center md:text-left">
                                                <b>{card.title}: </b>
                                                {card.description}
                                            </div>
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="rounded-lg md:w-1/2 object-cover"
                                            />
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
