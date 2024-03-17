'use client';

import FormButton from '../Common/form-button';
import * as actions from '@/lib/actions';
import { useFormState } from 'react-dom';
import {
    Input,
    Button,
    Textarea,
    PopoverTrigger,
    PopoverContent,
    Popover,
} from '@nextui-org/react';

interface IPostCreateFormProps {
    slug: string;
}
//
const PostCreateForm = ({ slug }: IPostCreateFormProps) => {
    const [formState, formAction] = useFormState(
        actions.createPost.bind(null, slug),
        {
            errors: {},
        }
    );

    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create Post</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={formAction}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create Post</h3>
                        <Input
                            name='title'
                            label='Title'
                            labelPlacement='outside'
                            placeholder='Title'
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(', ')}
                        />
                        <Textarea
                            name='content'
                            label='Content'
                            labelPlacement='outside'
                            placeholder='Content'
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(', ')}
                        />

                        {formState.errors._form ? (
                            <div className='p-2 bg-red-200 border border-red-400 rounded-xl'>
                                {formState.errors._form?.join(', ')}
                            </div>
                        ) : null}
                        <FormButton children='Create'></FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
};

// ***************************
export default PostCreateForm;
