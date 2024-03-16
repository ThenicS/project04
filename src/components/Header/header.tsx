import { getServerSession } from 'next-auth/next';
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import signIn from 'next-auth/next';
import signOut from 'next-auth/next';
import * as actions from '@/lib/actions';
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { options } from '@/app/api/auth/[...nextauth]/options';
import Link from 'next/link';

import {
    Avatar,
    Button,
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react';

export default async function Header({ signOut }: any) {
    const session = await getServerSession(options);
    const userImage = (session?.user?.image as string) || undefined;

    // async function handleSignOut(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     await signOut(); // Call the signOut function to handle the sign-out logic
    // }

    console.log(session?.user);
    let authContent: React.ReactNode;
    if (session) {
        authContent = (
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={userImage} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className='p-4'>
                        <form action={signOut}>
                            <Button type='submit'>Log Out</Button>
                        </form>
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

    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <Link href='/' className='font-bold'>
                    Tattle
                </Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>{authContent}</NavbarContent>
        </Navbar>
    );
}
