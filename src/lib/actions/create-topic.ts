'use server';

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { db } from '@/lib/db';
import { z } from 'zod';
import paths from '@/paths';

import type { NextApiResponse, NextApiRequest } from 'next';
import type { Topic } from '@prisma/client';
interface ICreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    };
}
// name:        string
// description: string
const topicSchema = z.object({
    name: z
        .string()
        .min(3)
        .regex(/^[a-zA-Z0-9-]+$/, {
            message: 'Must letters and number or dash without Spaces',
        }),
    description: z.string().min(10),
});

// Interface FormData
export async function createTopic(
    formState: ICreateTopicFormState,
    formData: FormData
): Promise<ICreateTopicFormState> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // safeParse for object
    const result = topicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    });
    // check result
    if (!result.success) {
        // Format Error Handling
        //https://zod.dev/ERROR_HANDLING?id=flattening-errors
        console.log('topicSchema safeParse Not Success');
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
    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
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
    // https://nextjs.org/docs/app/api-reference/functions/revalidatePath
    // allows you to purge cached data on-demand for a specific path.
    revalidatePath('/');
    redirect(paths.topicsPage(topic.slug));
    // return {
    //     errors: {},
    // };
}
