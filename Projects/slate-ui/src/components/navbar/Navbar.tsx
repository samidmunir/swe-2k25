import Logo from '../../../public/logo.png'
import Image from 'next/image'

import {MdHome, MdApps, MdCyclone, MdHub, MdAttachMoney, MdInfo, MdLogin} from 'react-icons/md'
import NavbarLink from './NavbarLink'
import CTAButton from '../ui/cta/CTAButton'

const links = [
    {
        id: 0,
        label: 'Home',
        href: '/',
        icon: <MdHome />,
    },
    {
        id: 1,
        label: 'Components',
        href: '/components',
        icon: <MdApps />,
    },
    {
        id: 2,
        label: 'Categories',
        href: '/categories',
        icon: <MdHub />,
    },
    {
        id: 3,
        label: 'Featured',
        href: '/featured',
        icon: <MdCyclone />,
    },
    {
        id: 4,
        label: 'Pricing',
        href: '/pricing',
        icon: <MdAttachMoney />,
    },
    {
        id: 5,
        label: 'About',
        href: '/about',
        icon: <MdInfo />,
    }
];

const Navbar = () => {
    return (
        <main className='bg-zinc-900 w-full border-b-2 border-emerald-500 px-8 py-4 flex justify-between'>
            <div className='flex gap-4'>
                <Image src={Logo} alt='Logo' className='w-[80] rounded-full border-2 border-zinc-700 hover:border-emerald-500 hover:scale-110 transition-all' />
                <h1 className='text-4xl text-emerald-500 my-auto py-2 px-2'>SlateUI</h1>
            </div>
            <div className='flex gap-8 my-auto'>
                {links.map(link => <NavbarLink key={link.id} label={link.label} href={link.href} icon={link.icon} />)}
            </div>
            <div className='flex gap-8 my-auto'>
                <p className='text-zinc-300 my-auto w-[220] border-b-1 border-red-500 text-center'>example.johndoe@email.com</p>
                <CTAButton type='login' label='Login' icon={<MdLogin />} />
            </div>
        </main>
    );
}

export default Navbar;