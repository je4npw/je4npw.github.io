import js from "@/images/logos/js.png";
import react from "@/images/logos/react.png";
import next from "@/images/logos/next.png";
import node from "@/images/logos/nodejs.png";
import php from "@/images/logos/php.png";
import tailwind from "@/images/logos/tailwind.png";
import {TechSkill} from "@/components/Icons";
import Image from "next/image";

export default function Skills(){
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