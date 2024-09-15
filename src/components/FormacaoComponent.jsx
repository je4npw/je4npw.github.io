import unopar from "@/images/logos/unopar.png";
import ifsc from "@/images/logos/ifsc.jpg";
import victor from "@/images/logos/victor.png";
import { Certification} from "@/components/Icons";
import Image from "next/image";

export default function FormacaoComponent() {
    let formacao = [
        {
            instituto: 'Unopar - Universidade do Norte do Paraná',
            curso: 'Ciências da Computação',
            logo: unopar,
            start: '01/2023',
            end: 'atual - 4 semestre',
        },{
            instituto: 'IFSC - Instituto Federal de Santa Catarina',
            curso: 'Análise e Desenvolvimento de Sistemas',
            logo: ifsc,
            start: '01/2012',
            end: '12/2012 (incompleto 2 semestre)',
        },
        {
            instituto: 'Escola de Ensino Médio Victor Meirelles',
            curso: 'Ensino Médio',
            logo: victor,
            start: '01/1999',
            end: '21/2002',
        }
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Certification className="h-6 w-6 flex-none" />
                <span className="ml-3 text-orange-600 text-xl">Formação</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {formacao.map((role, roleIndex) => (
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
                            <dt className="sr-only">Instituição</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.instituto}
                            </dd>
                            <dt className="sr-only">Curso</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.curso}
                            </dd>
                            <dt className="sr-only">Datas</dt>
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