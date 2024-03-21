//
import CommentShow from './comment-show';

// interface IPostListProps {
//     fetchData: () => Promise<PostWithData[]>;
// }

import type { CommentWithUserData } from '@/lib/queries/comments';

// interface ICommentListProps {
//     comments: () => Promise<CommentWithUserData[]>;
// }

interface ICommentListProps {
    fetchCommentsData: () => Promise<CommentWithUserData[]>;
}

const CommentList = async ({ fetchCommentsData }: ICommentListProps) => {
    const comments = await fetchCommentsData();
    //
    const topLevelComments = comments.filter(
        (comment) => comment.parentId === null
    );
    const renderedComments = topLevelComments.map((comment) => {
        return (
            <CommentShow
                key={comment.id}
                commentId={comment.id}
                comments={comments}
            />
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
