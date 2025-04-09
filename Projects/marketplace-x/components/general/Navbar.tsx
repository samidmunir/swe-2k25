import Image from 'next/image';
import MarketPlaceXLogo from '../../public/marketplace_x_logo.png';
import LoginButton from '../ui/LoginButton';
import RegisterButton from '../ui/RegisterButton';
import Nav from '../ui/Nav';

import { MdHome, MdViewCarousel, MdSell, MdDashboard, MdPermContactCalendar } from 'react-icons/md';

const nav_links = [
    {
        id: 0,
        label: 'Home',
        href: '/',
        icon: <MdHome />,
    },
    {
        id: 1,
        label: 'Catalog',
        href: '/catalog',
        icon: <MdViewCarousel />,
    },
    {
        id: 2,
        label: 'Sell',
        href: '/catalog',
        icon: <MdSell />,
    },
    {
        id: 3,
        label: 'Dashboard',
        href: '/dashboard',
        icon: <MdDashboard />,
    },
    {
        id: 4,
        label: 'Contact',
        href: '/contact',
        icon: <MdPermContactCalendar />,
    },
];

const Navbar = () => {
    return (
        <nav className='bg-zinc-950 flex items-center justify-between px-8 py-4 border-b-2 border-sky-500'>
            <div className='flex items-center'>
                <div className='relative w-[75px]'>
                    <Image src={MarketPlaceXLogo} alt='MarketplaceX Logo' className='object-cover' />
                </div>
                <h1 className='text-3xl text-zinc-300 font-bold'>Marketplace<span className='text-sky-500'>X</span></h1>
            </div>
            <div className='flex gap-8'>
                {nav_links.map((nav_link) => <Nav key={nav_link.id} label={nav_link.label} href={nav_link.href} icon={nav_link.icon} />)}
            </div>
            <div className='flex gap-4'>
                <LoginButton />
                <RegisterButton />
            </div>
        </nav>
    );
}

export default Navbar;