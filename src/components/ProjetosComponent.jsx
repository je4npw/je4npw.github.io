import {Certification} from "@/components/Icons";

export default function ProjetosComponent(props) {
    const projects = [
        {
            title: "EtherNyx-Project",
            description: "EtherNyx Project é um projeto opensource baseado inicialmente no projeto Numix, que tem" +
                " como missão diminuir a distância entre a arte e a máquina.",
            link: "https://github.com/je4npw/EtherNyx-Project"
        },
        {
            title: "valedaluz.com.br",
            description: "Site organizacional para Comunidade Terapêutica - projeto comunitário.",
            link: "https://github.com/je4npw/valedaluz.com.br"
        },
        {
            title: "iff-plan-php",
            description: "Sistema para geração de guias de turno para abrigos e casas de passagem, baseado em" +
                " migração WSCTS e Laravel.",
            link: "https://github.com/je4npw/iff_plan_php"
        },
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Certification className="h-6 w-6 flex-none"/>
                <span className="ml-3 text-orange-600 text-xl">Projetos Pessoais</span>
            </h2>
            <ul className="mt-4 space-y-4">
                {projects.map((project, index) => (
                    <li key={index} className="text-base text-zinc-600 dark:text-zinc-400">
                        <strong>{project.title}</strong>: {project.description} <br/>
                        <a href={project.link} className="text-blue-500">Ver no GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}