// import { options } from './api/auth/[...nextauth]/options';
// import { getServerSession } from 'next-auth/next';
// import { Button } from '@nextui-org/react';
// import Profile from '@/components/Profile/profile';
import TopicCreateForm from '@/components/Topics/topic-create-form';
export default function Home() {
    // const session = await getServerSession(options);
    // console.log(session);
    // console.log(options);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            Home
        </main>
    );
}
