'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavProps = {
    label: string;
    href: string;
    icon: React.ReactElement;
};

const Nav = (props: NavProps) => {
    const pathname = usePathname();
    return (
        <Link href={props.href} className={`${pathname === props.href ? 'text-sky-500 border-sky-500 font-bold' : 'text-zinc-300 border-zinc-950'} border-t-2 flex  items-center gap-2 text-md hover:text-sky-500 transition-all cursor-default`}><span>{props.icon}</span>{props.label}</Link>
    );
}

export default Nav;