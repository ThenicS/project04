import Link from 'next/link';

//
import paths from '@/paths';
import { Card, Divider } from '@nextui-org/react';

import type { PostWithData } from '@/lib/queries/posts';
// import type { User, Topic, Post } from '@prisma/client';

interface IPostListProps {
    fetchData: () => Promise<PostWithData[]>;
}

const PostList = async ({ fetchData }: IPostListProps) => {
    const posts = await fetchData();

    const renderedPosts = posts.map((post) => {
        const topicSlug = post.topic.slug;

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        if (!topicSlug) {
            throw new Error('Need a slug to link to post');
        }
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        return (
            <Card key={post.id} className='space-y-2'>
                <Link href={paths.postPage(topicSlug, post.id)}>
                    <div className='p-2'>
                        <h3 className='text-lg font-bold'>{post.title}</h3>
                        <Divider className='my-2' />
                        <div className='flex flex-row gap-8'>
                            <p className='text-xs text-gray-400'>
                                By {post.user.name}
                            </p>
                            <p className='text-xs text-gray-400'>
                                By {post._count.Comment} comments
                            </p>
                        </div>
                    </div>
                </Link>
            </Card>
        );
    });

    return <div className='space-y-2'>{renderedPosts}</div>;
};

// ***************************
export default PostList;
