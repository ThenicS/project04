import type { Post, Topic } from '@prisma/client';
import { db } from '@/lib/database/db';
import { searchPosts } from '../actions';

export type PostWithData = Post & {
    topic: { slug: string };
    user: { name: string | null };
    _count: { Comment: number };
};

// export type PostWithData = Awaited<
//     ReturnType<typeof fetchPostByTopicSlug>
// >[number];

export async function fetchPostByTopicSlug(
    slug: string
): Promise<PostWithData[]> {
    const PostWithData = await db.post.findMany({
        where: { topic: { slug } },
        include: {
            topic: { select: { slug: true } },
            user: { select: { name: true } },
            _count: { select: { Comment: true } },
        },
    });
    // console.log(PostWithData)
    //
    return PostWithData;
}

export async function findTopPost(): Promise<PostWithData[]> {
    const TopPostWithData = await db.post.findMany({
        orderBy: [
            {
                Comment: {
                    _count: 'desc',
                },
            },
        ],
        include: {
            topic: { select: { slug: true } },
            user: { select: { name: true, image: true } },
            _count: { select: { Comment: true } },
        },
        take: 10,
    });

    return TopPostWithData;
}

export async function fetchSearchPosts(term: string): Promise<PostWithData[]> {
    //
    const SearchPostWithData = await db.post.findMany({
        include: {
            topic: { select: { slug: true } },
            user: { select: { name: true, image: true } },
            _count: { select: { Comment: true } },
        },
        where: {
            OR: [
                { title: { contains: term } },
                { content: { contains: term } },
            ],
        },
    });

    return SearchPostWithData;
}
