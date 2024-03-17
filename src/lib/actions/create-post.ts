'use server';

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/lib/db';
import { z } from 'zod';
import paths from '@/paths';

import type { Post } from '@prisma/client';
import type { User } from '@prisma/client';
// import { error } from 'console';
interface ICreatePostFormState {
    errors: {
        title?: string[];
        content?: string[];
        _form?: string[];
    };
}

const postSchema = z.object({
    title: z.string().min(3),
    // .regex(/^[a-zA-Z0-9-]+$/, {
    //     message: 'Must letters and number or dash without Spaces'
    // }),
    content: z.string().min(10),
});

export async function createPost(
    slug: string,
    formState: ICreatePostFormState,
    formData: FormData
): Promise<ICreatePostFormState> {
    // Revalidate topci show page

    const result = postSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
    });
    // check result
    if (!result.success) {
        // Format Error Handling
        //https://zod.dev/ERROR_HANDLING?id=flattening-errors
        console.log('postSchema safeParse Not Success');
        return { errors: result.error.flatten().fieldErrors };
    }
    const session = await getServerSession(options);
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['Please Sign In'],
            },
        };
    }
    // console.log(session.user.id);

    // Find topic with slug
    const topic = await db.topic.findFirst({
        where: { slug },
    });

    if (!topic) {
        return {
            errors: {
                _form: ['Topic not Found !'],
            },
        };
    }

    let post: Post;
    try {
        post = await db.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                userId: session.user.id,
                topicId: topic.id,
            },
        });
    } catch (error: unknown) {
        console.error(error);
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
    console.log(slug);
    revalidatePath(paths.topicsPage(slug));
    redirect(paths.postPage(slug, post.id));
}
