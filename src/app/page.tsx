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
            <div className='grid grid-cols-4 gap-4 p-4'>
                <div className='col-span-3'>
                    <h1 className='text-xl m2'>Top Post</h1>
                </div>
                <div>
                    <TopicCreateForm />
                </div>
            </div>
        </main>
    );
}
