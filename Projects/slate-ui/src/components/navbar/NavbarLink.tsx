'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface NavbarLinkProps {
    label: string;
    href: string;
    icon: React.ReactElement;
}

const NavbarLink = (props: NavbarLinkProps) => {
    const pathname = usePathname();
    return (
        <Link href={props.href} className={pathname === props.href ? 'text-emerald-500 scale-110 flex gap-2 my-auto border-b-2 border-emerald-500 py-1' : 'text-zinc-300 flex gap-2 my-auto border-b-2 border-zinc-900 py-1 hover:text-emerald-500 hover:border-emerald-500 hover:scale-110 transition-all'}>
            <span className='my-auto'>{props.icon}</span>
            <p>{props.label}</p>
        </Link>
    );
}

export default NavbarLink;