// import type { Post, Topic } from '@prisma/client';
// import { db } from '@/lib/database/db';

// export type PostWithData = Post & {
//     topic: { slug: string };
//     user: { name: string | null };
//     _count: { Comment: number };
// };

// // export type PostWithData = Awaited<
// //     ReturnType<typeof fetchPostByTopicSlug>
// // >[number];

// export async function fetchPostByTopicSlug(
//     slug: string
// ): Promise<PostWithData[]> {
//     const PostWithData = await db.post.findMany({
//         where: { topic: { slug } },
//         include: {
//             topic: { select: { slug: true } },
//             user: { select: { name: true } },
//             _count: { select: { Comment: true } },
//         },
//     });
//     // console.log(PostWithData)
//     //
//     return PostWithData;
// }
