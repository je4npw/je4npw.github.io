import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    MailIcon,
} from "@/components/Icons";
import portraitImage from '@/images/portrait.jpg'
import SocialLinkWithNames from "@/components/SocialLinkWithNames";


export default function Home() {
    return (
        <>
            <Head>
                <title>Portifólio Jean Patrick - Sobre</title>
                <meta
                    name="description"
                    content="Portifólio Jean Patrick - Home"
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            Jean Patrick (Je4nPw)
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                Me chamo Jean, sou acadêmico de Ciências da Computação e entusiasta Linux. Sou apaixonado por engenharia
                                desistemas, fabricação de sites e cultura DevOps. Meus projetos pessoais visam ajudar no desenvolvimento
                                sustentável de comunidades.
                            </p>
                            <p>
                                Estudo a tecnologia computacional desde os 7 anos de idade, quando ganhei meu primeiro
                                I386 com sistema DOS. Essa máquina abriu minha mente para o poder computacional,
                                e nela eu desenvolvi o primeiro script em bloco.
                            </p>
                            <p>
                                Meu primeiro sistema operacional com renderização gráfica foi o Windows 3.11, sistema
                                que me impactou pela facilidade de operação e que me inspirou por anos. Sou da geração
                                que viu a internet nascendo e se desenvolvendo, e passei por todas as aplicações
                                clássicas.
                            </p>
                            <p>
                                Em 2012 descobri o Linux e isso impactou de forma muito profunda a minha compreensão
                                do computador. Esse é meu sistema principal de trabalho desde então. Colaboro com
                                projetos de código aberto e uso o Arch Linux em minha estação de trabalho.
                            </p>
                            <p>
                                Estou cursando o terceiro semestre de ciências da computação e pretendo usar todo o
                                conhecimento adquirido para ajudar entidades com projetos sustentáveis e de educação
                                digital.
                            </p>
                            <p>
                               Meu tempo livre é dedicado à musica e desenvolvimento pessoal através do estudo profundo
                                das coisas espirituais. Não tenho vícios e sou voluntário em uma entidade que ajuda
                                pessoas que tem dificuldades com o uso de álcool e drogas.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLinkWithNames href="#" icon={InstagramIcon} className="mt-4">
                                Follow on Instagram
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="https://github.com/vjordan-cs"
                                icon={GitHubIcon}
                                className="mt-4"
                            >
                                Follow on GitHub
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="https://linkedin.com/in/victoria-jordan01/"
                                icon={LinkedInIcon}
                                className="mt-4"
                            >
                                Follow on LinkedIn
                            </SocialLinkWithNames>
                            <SocialLinkWithNames
                                href="mailto:vjordan.cs@gmail.com"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                vjordan.cs@gmail.com
                            </SocialLinkWithNames>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
