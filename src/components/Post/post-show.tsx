//
//
//

import { db } from '@/lib/database/db';
import { notFound } from 'next/navigation';
import { resolve } from 'path';

interface IPostShowProps {
    postId: string;
}

const PostShow = async ({ postId }: IPostShowProps) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const post = await db.post.findFirst({
        where: { id: postId },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className='m-4'>
            <h1 className='text-2xl font-bold my-2'>{post.title}</h1>
            <p className='p-4 border rounded whitespace-pre-wrap'>
                {post.content}
            </p>
        </div>
    );
};

// ***************************
export default PostShow;
