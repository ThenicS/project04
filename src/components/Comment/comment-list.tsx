//
//

// interface IPostListProps {
//     fetchData: () => Promise<PostWithData[]>;
// }

import type { CommentWithUser } from '@/lib/queries/comT';

interface ICommentListProps {
    comments: () => Promise<CommentWithUser[]>;
}

const CommentList = async ({ comments }: ICommentListProps) => {
    //
    const comments2 = await comments();
    const renderComments = comments2.map((comment) => {
        return <div key={comment.id}>{comment.content}</div>;
    });
    return (
        <div>
            <h3>Comment List</h3>
            {renderComments}
        </div>
    );
};

// ***************************
export default CommentList;
