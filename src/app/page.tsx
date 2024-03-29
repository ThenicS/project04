// import { options } from './api/auth/[...nextauth]/options';
// import { getServerSession } from 'next-auth/next';
// import { Button } from '@nextui-org/react';
// import Profile from '@/components/Profile/profile';
import { Divider } from '@nextui-org/react';
import TopicList from '@/components/Topics/topic-list';
import TopicCreateForm from '@/components/Topics/topic-create-form';
import PostList from '@/components/Post/post-list';
import { findTopPost } from '@/lib/queries/posts';

export const metadata = {
    title: 'ZodCode',
    description: 'ZodeCode description',
};

export default function Home() {
    // const session = await getServerSession(options);
    // console.log(session.user.id);
    // console.log(options);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='grid grid-cols-4 gap-4 p-4'>
                <div className='col-span-3'>
                    <h1 className='text-xl m2'>Top Post</h1>
                    <PostList fetchData={findTopPost} />
                </div>
                <div className='border shadow py-3 px-2 rounded-xl'>
                    <TopicCreateForm />
                    <Divider className='my-2' />
                    <h3 className='text-lg'>Topics</h3>
                    <TopicList />
                </div>
            </div>
        </main>
    );
}
