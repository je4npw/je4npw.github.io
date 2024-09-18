import { useEffect, useRef } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const commonTitle = "Jean Wick Dev";
const commonDescription =
    "Foco na solução! Pega a visão!";
const commonUrl = "https://je4npw.netlify.app/";
const commonImage = "https://je4npw.netlify.app/capa.jpg";
const commonImageDetails = {
  url: commonImage,
  width: 1200,
  height: 630,
  alt: "Imagem de cartão de visita virtual.",
};

export const metadata = {
  title: commonTitle,
  description: commonDescription,
  openGraph: {
    type: "website",
    title: commonTitle,
    description: commonDescription,
    url: commonUrl, // Pode não ser necessário para OpenGraph
    images: [commonImageDetails],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: commonTitle,
    description: commonDescription,
    images: [commonImage], // Corrigido para plural
    image_alt: "Imagem de prévia do site no Twitter", // Adicionado alt
  },
  author: "Je4nPw",
  keywords: [
    "desenvolvimento web",
    "devops",
    "análise",
    "sistemas",
    "sistema",
    "banco de dados",
    "implantação de sistemas",
    "gestão de nuvem",
    "ajustes em sistemas",
  ],
};

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
