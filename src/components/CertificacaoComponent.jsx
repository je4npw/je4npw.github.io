import avatarImage from "@/images/avatar.jpg";
import {Bachelor, Debian, DoWhile, Together, Windows} from "@/components/Icons";
import Image from "next/image";

export default function CertificacaoComponent() {
    const certificacoes = [
        {
            certificacao: "RocketSeat DoWhile 2022",
            logo: <DoWhile />,
            recebimento: "13/12/2022",
        }, {
            certificacao: "RocketSeat NLW Together 2021",
            logo: <Together />,
            recebimento: "23/09/2021",
        }, {
            certificacao: "Servidores Linux - Debian",
            logo: <Debian />,
            recebimento: "23/09/2015",
        }, {
            certificacao: "Servidores Windows",
            logo: <Windows/>,
            recebimento: "23/09/2019",
        }
    ];


    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Bachelor className="h-6 w-6 flex-none"/>
                <span className="ml-3 text-orange-600 text-xl">Certificações</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {certificacoes.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            {role.logo}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Certificação</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.certificacao}
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </div>
    );
}