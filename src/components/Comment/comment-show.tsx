//

import CommentCreateForm from '@/components/Comment/comment-create-form';

import Image from 'next/image';
import { Button, Card } from '@nextui-org/react';
import { findCommentsByPostId } from '@/lib/queries/comments';

import type { CommentWithUserData } from '@/lib/queries/comments';
import { resolve } from 'path';
interface ICommentShowProps {
    commentId: string;
    postId: string;
    // comments: CommentWithUserData[];
}

const CommentShow = async ({ commentId, postId }: ICommentShowProps) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    //
    const comments = await findCommentsByPostId(postId);
    const comment = comments.find((c) => {
        return c.id === commentId;
    });

    if (!comment) {
        return null;
    }

    const childern = comments.filter((c) => {
        return c.parentId === commentId;
    });

    const renderedChildenComments = childern.map((childComments) => {
        return (
            <CommentShow
                key={childComments.id}
                commentId={childComments.id}
                postId={postId}
            />
        );
    });

    return (
        <div className='p-4 border mt-2 mb-1 rounded-lg'>
            <div className='flex gap-3'>
                <Image
                    className='w-10 h-10 rounded-full'
                    src={comment.user.image || ''}
                    alt='user image'
                    width={40}
                    height={40}
                />
                <div className='flex-1 space-y-3'>
                    <p className='italic text-indigo-600 text-lg font-bold subpixel-antialiased'>
                        {comment.user.name}
                    </p>
                    <Card className='p-4'>
                        <p className='text-justify whitespace-pre-wrap'>
                            {comment.content}
                        </p>
                    </Card>

                    <CommentCreateForm
                        postId={comment.postId}
                        parentId={comment.id}
                    />
                </div>
            </div>
            <div className='pl-4'>{renderedChildenComments}</div>
        </div>
    );
};

// ***************************
export default CommentShow;
