import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Home, Info, Contact} from 'lucide-react';
import { NavItem} from '@/types';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const navItems: NavItem[] = [
    {
        title : 'Home',
        href  : '/',
        icon  : Home,
        isActive : true,
    },

    {
        title : 'About',
        href  : '/about',
        icon  : Info,
        isActive : false,
    },

    {
        title : 'Contact',
        href  : '/contact',
        icon  : Contact,
        isActive : false,
    }
]
