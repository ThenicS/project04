//
//
import CommentList from '@/components/Comment/comment-list';
import CommentCreateForm from '@/components/Comment/comment-create-form';
import PostShow from '@/components/Post/post-show';
import PostLoading from '@/components/Post/post-loading';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import paths from '@/paths';
import path from 'path';

import { findCommentsByPostId } from '@/lib/queries/comments';
interface IPageProps {
    params: {
        slug: string;
        postId: string;
    };
}

export const metadata = {
    title: 'ZodCode Post Page',
    description: 'ZodCode Post Page description',
};

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
            <Suspense fallback={PostLoading()}>
                <PostShow postId={postId} />
            </Suspense>
            <CommentCreateForm postId={postId} startOpen />
            {/* <CommentList /> */}
            <CommentList postId={postId} />
        </div>
    );
}
