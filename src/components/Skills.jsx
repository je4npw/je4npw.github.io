import js from "@/images/logos/js.png";
import react from "@/images/logos/react.png";
import next from "@/images/logos/next.png";
import node from "@/images/logos/nodejs.png";
import php from "@/images/logos/php.png";
import tailwind from "@/images/logos/tailwind.png";
import typescript from "@/images/logos/typescript.png";
import docker from "@/images/logos/docker.png";
import mongo from "@/images/logos/mongo.png";
import mysql from "@/images/logos/mysql.png";
import {TechSkill} from "@/components/Icons";
import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            skill: "PHP / Laravel",
            score: "Pleno",
            logo: php,
        }, {
            skill: "Javascript",
            score: "Pleno",
            logo: js,
        }, {
            skill: "React",
            score: "Pleno",
            logo: react,
        }, {
            skill: "NextJS",
            score: "Pleno",
            logo: next,
        }, {
            skill: "Tailwind",
            score: "Pleno",
            logo: tailwind,
        },
    ];
    const skillsCol2 = [
        {
            skill: "Mysql",
            score: "Pleno",
            logo: mysql,
        }, {
            skill: "Docker",
            score: "Pleno",
            logo: docker,
        },{
            skill: "Typescript",
            score: "Learning",
            logo: typescript,
        }, {
            skill: "Mongodb",
            score: "Learning",
            logo: mongo,
        }, {
            skill: "NodeJS/NPM",
            score: "Learning",
            logo: node,
        }
    ];
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <TechSkill className="h-6 w-6 flex-none"/>
                <span className="ml-3 text-orange-600 text-xl">Techs</span>
            </h2>
            <div className="flex flex-col lg:flex-row">
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
                                <dd className="text-xs font-light text-zinc-500 dark:text-zinc-400">
                                    {role.score}
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ol>
                <ol className="mt-6 space-y-4">
                    {skillsCol2.map((role, roleIndex) => (
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
                                <dd className="text-xs font-light text-zinc-500 dark:text-zinc-400">
                                    {role.score}
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}