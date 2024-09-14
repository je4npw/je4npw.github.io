import {Speaking} from "@/components/Icons";

export default function IdiomasComponent(props) {
    const languages = [
        {language: "Português", proficiency: "Nativo"},
        {language: "Inglês", proficiency: "Médio"},
        {language: "Espanhol", proficiency: "Ouvinte/Leitor"},
    ];

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Speaking className="h-6 w-6 flex-none"/>
                <span className="ml-3 text-orange-600 text-xl">Idiomas</span>
            </h2>
            <ul className="mt-4 space-y-4">
                {languages.map((lang, index) => (
                    <li key={index} className="text-base text-zinc-600 dark:text-zinc-400">
                        <strong>{lang.language}</strong>: {lang.proficiency}
                    </li>
                ))}
            </ul>
        </div>
    );
}