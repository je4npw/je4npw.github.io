import Head from 'next/head'
import { useState, useEffect } from 'react';
import { Container } from '@/components/Container'
import { motion } from 'framer-motion';
import {
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
} from "@/components/Icons";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SocialLink from "@/components/SocialLinks";
import FormacaoComponent from "@/components/FormacaoComponent";
import CertificacaoComponent from "@/components/CertificacaoComponent";
import ProjetosComponent from "@/components/ProjetosComponent";
import IdiomasComponent from "@/components/IdiomasComponent";
import { staggerContainer, fadeInRandom } from '@/lib/random';
import avatarImage from '@/images/avatar.png';
import Image from 'next/image';

export default function Sobre() {
    const [isClient, setIsClient] = useState(false);

    // Garante que as animações só serão aplicadas no cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <Head>
                <title>Portifólio Jean Patrick - Currículo</title>
                <meta name="description" content="Currículo Jean Patrick" />
            </Head>

            {/* Resumo Profissional */}
            <Container className="mt-9">
                {isClient && (
                    <motion.div
                        className="flex flex-col lg:flex-row lg:items-start max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Avatar: Aparece à esquerda apenas em telas grandes */}
                        <div className="hidden lg:block lg:mr-6">
                            <Image
                                src={avatarImage}
                                alt="Avatar de Jean Patrick"
                                className="rounded-full "
                                width={350} // Tamanho do avatar
                                height={350}
                            />
                        </div>

                        {/* Conteúdo: H1, P e Links */}
                        <div>
                            <motion.h1
                                className="text-4xl font-bold tracking-tight text-orange-800 dark:text-[#fe6054] sm:text-5xl"
                                variants={fadeInRandom} // Movimentos aleatórios
                            >
                                Jean Patrick Wilhvock
                            </motion.h1>
                            <motion.p
                                className="mt-6 text-base text-zinc-800 dark:text-zinc-200"
                                variants={fadeInRandom} // Movimentos aleatórios
                            >
                                Sou acadêmico de Ciências da Computação com foco em desenvolvimento de software e DevOps...
                            </motion.p>

                            {/* Links Sociais */}
                            <motion.div
                                className="mt-6 flex gap-6"
                                variants={fadeInRandom} // Movimentos aleatórios
                            >
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
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </Container>

            {/* Seção de Educação e Certificações */}
            {isClient && (
                <Container className="mt-16 md:mt-20">
                    <motion.div
                        className="mx-auto grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-2 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInRandom}>
                            <FormacaoComponent />
                        </motion.div>
                        <motion.div variants={fadeInRandom}>
                            <CertificacaoComponent />
                        </motion.div>
                    </motion.div>
                </Container>
            )}

            {/* Experiências Profissionais e Habilidades Técnicas */}
            {isClient && (
                <Container className="mt-8 md:mt-8">
                    <motion.div
                        className="mx-auto grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-2 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInRandom}>
                            <Experience />
                        </motion.div>
                        <motion.div variants={fadeInRandom}>
                            <Skills />
                        </motion.div>
                    </motion.div>
                </Container>
            )}

            {/* Projetos e Idiomas */}
            {isClient && (
                <Container className="mt-8 md:mt-8">
                    <motion.div
                        className="mx-auto grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-2 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInRandom}>
                            <ProjetosComponent />
                        </motion.div>
                        <motion.div variants={fadeInRandom}>
                            <IdiomasComponent />
                        </motion.div>
                    </motion.div>
                </Container>
            )}
        </>
    );
}
