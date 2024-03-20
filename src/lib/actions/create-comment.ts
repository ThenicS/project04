'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/lib/database/db';
import { z } from 'zod';
import paths from '@/paths';
import { revalidatePath } from 'next/cache';

interface ICreateComentFormState {
    errors: {
        content?: string[];
        _form?: string[];
    };
    success?: boolean;
}

const createCommentSchema = z.object({
    content: z.string().min(5),
});

export async function createComment(
    {
        postId,
        parentId,
    }: {
        postId: string;
        parentId?: string;
    },
    formState: ICreateComentFormState,
    formData: FormData
): Promise<ICreateComentFormState> {
    const result = createCommentSchema.safeParse({
        content: formData.get('content'),
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const session: any = await getServerSession(options);
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['Please Sign In'],
            },
        };
    }

    try {
        await db.comment.create({
            data: {
                content: result.data.content,
                postId: postId,
                parentId: parentId,
                userId: session.user.id,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    _form: [error.message],
                },
            };
        } else {
            return {
                errors: {
                    _form: ['Something went wrong!!'],
                },
            };
        }
    }

    const topic = await db.topic.findFirst({
        where: { Post: { some: { id: postId } } },
    });

    if (!topic) {
        return {
            errors: {
                _form: ['Failed to revalidate topic in prisma'],
            },
        };
    }
    revalidatePath(paths.postPage(topic.slug, postId));

    return {
        errors: {},
        success: true,
    };
}
