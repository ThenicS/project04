//

import CommentCreateForm from '@/components/Comment/comment-create-form';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { findCommentsByPostId } from '@/lib/queries/comments';

import type { CommentWithUserData } from '@/lib/queries/comments';
interface ICommentShowProps {
    commentId: string;
    postId: string;
    // comments: CommentWithUserData[];
}

const CommentShow = async ({ commentId, postId }: ICommentShowProps) => {
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
        <div className='p-4 border mt-2 mb-1'>
            <div className='flex gap-3'>
                <Image
                    className='w-10 h-10 rounded-full'
                    src={comment.user.image || ''}
                    alt='user image'
                    width={40}
                    height={40}
                />
                <div className='flex-1 space-y-3'>
                    <p className='=text-sm font-medium text-gray-500'>
                        {comment.user.name}
                    </p>
                    <p className='text-gray-900'>{comment.content}</p>

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