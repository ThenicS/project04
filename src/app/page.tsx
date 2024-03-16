import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { Button } from '@nextui-org/react';
import Profile from '@/components/Profile/profile';

export default async function Home() {
    const session = await getServerSession(options);
    // console.log(session);
    // console.log(options);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div>
                <Button>Click me</Button>
            </div>
            {session ? <div>User Sign In </div> : <div>User Sign Out</div>}
            <Profile />
        </main>
    );
}
