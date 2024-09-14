import Image from "next/image";
import Head from "next/head";
import { Container } from "@/components/Container";
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    MailIcon,
} from "@/components/Icons";
import portraitImage from "@/images/portrait.jpg";
import SocialLinkWithNames from "@/components/SocialLinkWithNames";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importando o framer-motion

export default function Home() {
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        // Função para alternar visibilidade do cursor
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
                <title>Portifólio Jean Patrick - Sobre</title>
                <meta name="description" content="Portifólio Jean Patrick - Home"/>
            </Head>
            <Container className="mt-16 mx-2 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <motion.div
                        className="lg:pl-20 pl-4"
                        initial={{ opacity: 0, x: -50 }} // Inicialmente invisível e à esquerda
                        animate={{ opacity: 1, x: 0 }} // Animação de entrada
                        transition={{ duration: 1, delay: 0.3 }} // Tempo e atraso da animação
                    >
                        <motion.div
                            className="max-w-xs px-2.5 lg:max-w-none"
                            initial={{ opacity: 0, scale: 0.9 }} // Inicialmente invisível e pequeno
                            animate={{ opacity: 1, scale: 1 }} // Animação ao aparecer
                            transition={{ duration: 1 }} // Tempo da animação
                        >
                            <Image
                                src={portraitImage}
                                alt="Jean Patrick"
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:order-first lg:row-span-2"
                        initial={{ opacity: 0, x: 50 }} // Inicialmente invisível e à direita
                        animate={{ opacity: 1, x: 0 }} // Animação de entrada
                        transition={{ duration: 1, delay: 0.3 }} // Tempo e atraso da animação
                    >
                        <motion.h1
                            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                            initial={{ x: -100, opacity: 0 }} // Inicialmente fora da tela à esquerda
                            animate={{ x: 0, opacity: 1 }} // Entra suavemente
                            transition={{ duration: 0.8 }} // Tempo da animação
                        >
                            Jean Patrick (Je4nPw)
                        </motion.h1>
                        <motion.div
                            className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-200"
                            initial={{ opacity: 0 }} // Inicialmente invisível
                            animate={{ opacity: 1 }} // Aparece suavemente
                            transition={{ delay: 0.5, duration: 1 }} // Atraso para aparecer
                        >
                            <p>
                                Olá, sou Jean, acadêmico de Ciências da Computação com um grande
                                entusiasmo por tecnologia e soluções inovadoras. Desde cedo,
                                desenvolvi uma paixão por engenharia de sistemas, criação de
                                sites e pela cultura DevOps, áreas em que tenho me aprofundado
                                ao longo dos anos. Meu foco está na criação de soluções
                                tecnológicas que contribuem para o desenvolvimento sustentável
                                de comunidades e organizações.
                            </p>
                            <p>
                                Iniciei minha jornada no mundo da computação aos 7 anos, quando
                                explorei as primeiras linhas de código em um sistema DOS. Ao
                                longo do tempo, tive a oportunidade de vivenciar grandes marcos
                                da evolução tecnológica, como a transição do Windows 3.11 e,
                                mais tarde, a descoberta do Linux, sistema que utilizo desde
                                2012. Esse caminho me proporcionou uma compreensão profunda
                                sobre a estrutura e funcionamento dos sistemas, além de fomentar
                                minha contribuição em projetos de código aberto.
                            </p>
                            <p>
                                Atualmente, no quarto semestre do curso de Ciências da
                                Computação, estou dedicado a expandir meus conhecimentos para
                                oferecer soluções personalizadas em tecnologia. Meu objetivo é
                                colaborar com entidades e organizações que promovam educação
                                digital e projetos com impacto sustentável.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:pl-20"
                        initial={{ opacity: 0, y: 50 }} // Inicialmente invisível e abaixo
                        animate={{ opacity: 1, y: 0 }} // Animação de entrada
                        transition={{ duration: 1, delay: 0.3 }} // Tempo e atraso da animação
                    >
                        <motion.ul
                            role="list"
                            initial={{ opacity: 0 }} // Inicialmente invisível
                            animate={{ opacity: 1 }} // Aparece suavemente
                            transition={{ delay: 0.5, duration: 1 }} // Atraso e tempo da animação
                        >
                            <SocialLinkWithNames
                                href="https://instagram.com/je4npw"
                                icon={InstagramIcon}
                                className="mt-4"
                            >
                                Instagram
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="https://github.com/je4npw"
                                icon={GitHubIcon}
                                className="mt-4"
                            >
                                GitHub
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="https://linkedin.com/in/je4npw/"
                                icon={LinkedInIcon}
                                className="mt-4"
                            >
                                LinkedIn
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="mailto:je4npw@gmail.com"
                                icon={MailIcon}
                                className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-700/40"
                            >
                                je4n.pw@gmail.com
                            </SocialLinkWithNames>
                        </motion.ul>
                        <motion.div
                            className="flex flex-col mt-4 border shadow-md shadow-amber-200 border-red-600 hover:border-red-800 rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }} // Inicialmente invisível e pequeno
                            animate={{ opacity: 1, scale: 1 }} // Animação de entrada
                            transition={{ duration: 0.8 }} // Tempo da animação
                        >
                            <div
                                className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3"
                            >
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                            </div>
                            <div className="bg-gray-700 border-t-0 w-full text-gray-200 p-2 rounded-b-lg">
                                [root@localhost]# Com visão voltada à inovação e melhoria
                                contínua, busco soluções que maximizem resultados e proporcionem
                                um impacto positivo tanto para meus clientes quanto para a
                                comunidade.
                                <span className={isCursorVisible ? "" : "hidden"}>|</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </>
    );
}
