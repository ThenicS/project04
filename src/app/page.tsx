import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { Button } from '@nextui-org/react';

export default async function Home() {
    const session = await getServerSession(options);
    console.log(session);
    console.log(options);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div>Hello Test</div>
            <div>
                <Button>Click me</Button>
            </div>
            {session ? (
                <div>User Sign In {JSON.stringify(session.user)}</div>
            ) : (
                <div>User Sign Out</div>
            )}
        </main>
    );
}
