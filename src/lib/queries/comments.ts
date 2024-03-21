//
import type { Comment } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/lib/database/db';

export type CommentWithUserData = Comment & {
    user: { name: string | null; image: string | null };
};

export async function findCommentsByPostId(postId: string) {
    // const CommentWithData = await getServerSession(options).findMany;
    const CommentsWithUserData = await db.comment.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    });
    return CommentsWithUserData;
}
