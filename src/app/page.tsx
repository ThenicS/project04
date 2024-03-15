import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
    const session = await getServerSession(options);
    console.log(session);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div>Hello Test</div>
            {session ? <div>User Sign In</div> : <div>User Sign Out</div>}
        </main>
    );
}
