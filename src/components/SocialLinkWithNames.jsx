import Link from "next/link";
import clsx from "clsx";

export default function SocialLinkWithNames({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-red-600 dark:text-zinc-200 dark:hover:text-red-600"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-600" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}