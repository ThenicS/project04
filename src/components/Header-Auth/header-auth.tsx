'use client';
// import { getServerSession } from 'next-auth/next';
// import { options } from '@/app/api/auth/[...nextauth]/options';
// import * as actions from '@/lib/actions';
import SignOutButton from '../Buttons/signout';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {
    Avatar,
    Button,
    NavbarItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';

export default function HeaderAuth() {
    const session = useSession();
    const userImage = (session.data?.user?.image as string) || undefined;

    let authContent: React.ReactNode;
    // When client loading return null notshow anything
    if (session.status === 'loading') {
        authContent = null;
    } else if (session.data?.user) {
        authContent = (
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={userImage} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className='p-4'>
                        <SignOutButton />
                    </div>
                </PopoverContent>
            </Popover>
        );
    } else {
        authContent = (
            <>
                <NavbarItem>
                    <Button type='submit' color='primary' variant='flat'>
                        <Link href='/api/auth/signin'>Sign In</Link>
                    </Button>
                </NavbarItem>

                <NavbarItem>
                    <Button type='submit'>Sign Up</Button>
                </NavbarItem>
            </>
        );
    }

    return <>{authContent}</>;
}
