//
import CommentShow from './comment-show';

import { Suspense } from 'react';
import CommentLoading from './comment-loading';

// interface IPostListProps {
//     fetchData: () => Promise<PostWithData[]>;
// }

import type { CommentWithUserData } from '@/lib/queries/comments';
import { findCommentsByPostId } from '@/lib/queries/comments';

interface ICommentListProps {
    postId: string;
}

// interface ICommentListProps {
//     fetchCommentsData: () => Promise<CommentWithUserData[]>;
// }

const CommentList = async ({ postId }: ICommentListProps) => {
    // const comments = await fetchCommentsData();
    const comments = await findCommentsByPostId(postId);
    //
    const topLevelComments = comments.filter(
        (comment) => comment.parentId === null
    );
    const renderedComments = topLevelComments.map((comment) => {
        return (
            <Suspense key={comment.id} fallback={<CommentLoading />}>
                <CommentShow
                    key={comment.id}
                    commentId={comment.id}
                    postId={postId}
                />
            </Suspense>
        );
    });

    return (
        <div className='space-y-3'>
            <h1 className='text-lg font-bold'>All {comments.length}</h1>
            {renderedComments}
        </div>
    );
};

// ***************************
export default CommentList;
