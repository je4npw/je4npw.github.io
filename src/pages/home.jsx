import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    TechSkill,
    BriefCase, MailIcon,
} from "@/components/Icons";
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-6.jpg'
import ixc from '@/images/logos/ixc.png'
import questor from '@/images/logos/questor.png'
import sci from '@/images/logos/sci.png'
import seti from '@/images/logos/seti.png'
import js from '@/images/logos/js.png'
import react from '@/images/logos/react.png'
import next from '@/images/logos/next.png'
import node from '@/images/logos/nodejs.png'
import php from '@/images/logos/php.png'
import tailwind from '@/images/logos/tailwind.png'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'



function Article({ article }) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={article.date} decorate>
                {formatDate(article.date)}
            </Card.Eyebrow>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

function Newsletter() {
    return (
        <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-6 flex">
                <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
                <Button type="submit" className="ml-4 flex-none">
                    Join
                </Button>
            </div>
        </form>
    )
}

function Resume() {
    let resume = [
        {
            company: 'Seti Seg. da Informação',
            title: 'Desenvolvedor Full Stack',
            logo: seti,
            start: '03/2023',
            end: '10/2023',
        },
        {
            company: 'SCI Sistemas Contábeis',
            title: 'Engenheiro DevOps',
            logo: sci,
            start: '02/2022',
            end: '03/2023',
        },
        {
            company: 'Questor Sistemas LTDA',
            title: 'Engenheiro DevOps',
            logo: questor,
            start: '08/2021',
            end: '02/2022',
        },
        {
            company: 'IXCsoft Suporte De Informática LTDA',
            title: 'Análise e desenvolvimento de sistemas',
            logo: ixc,
            start: '01/2018',
            end: '12/2019',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefCase className="h-6 w-6 flex-none" />
                <span className="ml-3 text-orange-600">XP</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={role.logo}
                                alt=""
                                className="h-7 w-7 rounded-full"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
        </div>
    )
}

function Skills(){
    let skills = [
        {
            skill: 'Javascript',
            score: 'Pleno',
            logo: js,
        },{
            skill: 'React',
            score: 'Pleno',
            logo: react,
        },{
            skill: 'NextJS',
            score: 'Pleno',
            logo: next,
        },{
            skill: 'NodeJS',
            score: 'Junior',
            logo: node,
        },{
            skill: 'PHP',
            score: 'Pleno',
            logo: php,
        },{
            skill: 'Tailwind',
            score: 'Pleno',
            logo: tailwind,
        },
    ]
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <TechSkill className="h-6 w-6 flex-none"/>
                <span className="ml-3 text-orange-600">Techs</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {skills.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={role.logo}
                                alt=""
                                className="h-7 w-7 rounded-full"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Skill</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.skill}
                            </dd>
                            <dt className="sr-only">Score</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.score}
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </div>
    )
}

function Photos() {
    let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 ">
                {[image1, image2, image3, image4, image5, image6].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-48" +
                            " sm:rounded-2xl shadow-md shadow-[#fe6054]/50",
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-fill "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home({articles}) {
    return (
        <>
            <Head>
                <title>Portifólio Jean Patrick - Home</title>
                <meta
                    name="description"
                    content="Portifólio Jean Patrick - Home"
                />
            </Head>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-orange-800 dark:text-[#fe6054] sm:text-5xl">
                        Jean Patrick Wilhvock
                    </h1>
                    <p className="mt-6 text-base text-zinc-800 dark:text-zinc-200">
                        Me chamo Jean, sou acadêmico de Ciências da Computação e entusiasta Linux. Sou apaixonado por engenharia
                        de
                        sistemas, fabricação de sites e cultura DevOps. Meus projetos pessoais visam ajudar no desenvolvimento
                        sustentável de comunidades.
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
                        {/* <SocialLink
              href="https://twitter.com/cs__victoria"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
                    </div>
                </div>
            </Container>
            <Photos />
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        <Resume />
                        {/*{articles.map((article) => (*/}
                        {/*  <Article key={article.slug} article={article} />*/}
                        {/*))}*/}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/* <Newsletter /> */}
                        <Skills />
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({ component, ...meta }) => meta),
        },
    }
}
