import {useEffect, useRef} from "react";
import Head from "next/head";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";

import "@/styles/tailwind.css";
import "focus-visible";

function usePrevious(value) {
    let ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

const commonTitle = "Jean Wick Dev";
const commonDescription = "Foco na solução! Pega a visão!";
const commonUrl = "https://je4npw.netlify.app/";
const commonImage = "https://je4npw.netlify.app/capa.jpg";
const commonImageDetails = {
    url: commonImage, width: 1200, height: 630, alt: "Imagem de cartão de visita virtual.",
};

export const metadata = {
    title: commonTitle,
    description: commonDescription,
    openGraph: {
        type: "website", title: commonTitle, description: commonDescription, url: commonUrl, // Pode não ser necessário para OpenGraph
        images: [commonImageDetails], locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image", title: commonTitle, description: commonDescription, images: [commonImage], // Corrigido para plural
        image_alt: "Imagem de prévia do site no Twitter", // Adicionado alt
    },
    author: "Je4nPw",
    keywords: ["desenvolvimento web", "devops", "análise", "sistemas", "sistema", "banco de dados", "implantação de sistemas", "gestão de nuvem", "ajustes em sistemas",],
};

export default function App({Component, pageProps, router}) {
    let previousPathname = usePrevious(router.pathname);

    return (<>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
                <meta property="og:type" content={metadata.openGraph.type}/>
                <meta property="og:title" content={metadata.openGraph.title}/>
                <meta property="og:description" content={metadata.openGraph.description}/>
                <meta property="og:url" content={metadata.openGraph.url}/>
                <meta property="og:image" content={metadata.openGraph.images[0].url}/>
                <meta property="og:image:width" content={metadata.openGraph.images[0].width}/>
                <meta property="og:image:height" content={metadata.openGraph.images[0].height}/>
                <meta property="og:image:alt" content={metadata.openGraph.images[0].alt}/>
                <meta property="twitter:card" content={metadata.twitter.card}/>
                <meta property="twitter:title" content={metadata.twitter.title}/>
                <meta property="twitter:description" content={metadata.twitter.description}/>
                <meta property="twitter:image" content={metadata.twitter.images[0]}/>
                <meta property="twitter:image:alt" content={metadata.twitter.image_alt}/>
                <meta name="author" content={metadata.author}/>
                <meta name="keywords" content={metadata.keywords.join(", ")}/>
            </Head>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"/>
                </div>
            </div>
            <div className="relative">
                <Header/>
                <main>
                    <Component previousPathname={previousPathname} {...pageProps} />
                </main>
                <Footer/>
            </div>
        </>);
}
