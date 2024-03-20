import Link from 'next/link';
//
import paths from '@/paths';

import type { PostWithData } from '@/lib/queries/posts';
import type { User, Topic, Post } from '@prisma/client';

interface IPostListProps {
    fetchData: () => Promise<PostWithData[]>;
}

const PostList = async ({ fetchData }: IPostListProps) => {
    const posts = await fetchData();

    const renderedPosts = posts.map((post) => {
        const topicSlug = post.topic.slug;

        if (!topicSlug) {
            throw new Error('Need a slug to link to post');
        }

        return (
            <div key={post.id} className='border rounded p-2'>
                <Link href={paths.postPage(topicSlug, post.id)}>
                    <h3 className='text-lg font-bold'>{post.title}</h3>
                    <div className='flex flex-row gap-8'>
                        <p className='text-xs text-gray-400'>
                            By {post.user.name}
                        </p>
                        <p className='text-xs text-gray-400'>
                            By {post._count.Comment} comments
                        </p>
                    </div>
                </Link>
            </div>
        );
    });

    return <div className='space-y-2'>{renderedPosts}</div>;
};

// ***************************
export default PostList;
