import Head from 'next/head'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/Icons";
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SocialLink from "@/components/SocialLinks";

export default function About({articles}) {
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
        </Container>
        <Container className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              <Experience/>
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
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
