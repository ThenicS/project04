import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import { Suspense } from 'react';
import HeaderAuth from '../Header-Auth/header-auth';
import SearchPostInput from '../Seach/search-post-input';
import Link from 'next/link';

const Header = () => {
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href='/' className='font-bold'>
                    Tattle
                </Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Suspense>
                        <SearchPostInput />
                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    );
};

// ***************************
export default Header;
