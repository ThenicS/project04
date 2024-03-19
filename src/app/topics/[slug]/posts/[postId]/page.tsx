//
//
//
import Link from 'next/link';
import { notFound } from 'next/navigation';
import paths from '@/paths';
import path from 'path';
import { comment } from 'postcss';
interface IPostPageProps {
    params: {
        slug: string;
        postId: string;
    };
}
export default function PostPage({ params }: IPostPageProps) {
    console.log(params);
    const { slug, postId } = params;

    return (
        <div className='space-y-3'>
            <Link
                className='underline decoration-solid'
                href={paths.topicsPage(slug)}>
                {'< '}Back to {slug}
            </Link>
            {/* <Postshow /> */}
            {/* <CommentCreateForm postId={postId} startOpen /> */}
            {/* <CommentList comments={comments} /> */}
        </div>
    );
}
