//
//
import CommentList from '@/components/Comment/comment-list';
import CommentCreateForm from '@/components/Comment/comment-create-form';
import PostShow from '@/components/Post/post-show';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import paths from '@/paths';
import path from 'path';
// import { comment } from 'postcss';
import { findCommentsByPostId } from '@/lib/queries/comT';
interface IPageProps {
    params: {
        slug: string;
        postId: string;
    };
}
export default function PostPage({ params }: IPageProps) {
    //
    const { slug, postId } = params;

    return (
        <div className='space-y-3'>
            <Link
                className='underline decoration-solid'
                href={paths.topicsPage(slug)}>
                {'< '}Back to {slug}
            </Link>
            <PostShow postId={postId} />
            <CommentCreateForm postId={postId} startOpen />
            {/* <CommentList /> */}
            <CommentList comments={() => findCommentsByPostId(postId)} />
        </div>
    );
}
