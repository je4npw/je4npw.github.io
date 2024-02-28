import seti from "@/images/logos/seti.png";
import sci from "@/images/logos/sci.png";
import questor from "@/images/logos/questor.png";
import ixc from "@/images/logos/ixc.png";
import {BriefCase} from "@/components/Icons";
import Image from "next/image";

export default function Experience() {
    let experience = [
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
                {experience.map((role, roleIndex) => (
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
        </div>
    )
}