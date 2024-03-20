//
import type { Comment } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/lib/database/db';

export type CommentWithUser = Comment & {
    user: { name: string | null; image: string | null };
};

export async function fetchCommentsByPostId(postId: string) {
    // const CommentWithData = await getServerSession(options).findMany;
    return postId;
}
