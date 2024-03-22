'use client';

import { useState, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { Textarea, Button } from '@nextui-org/react';
import FormButton from '../Common/form-button';
import * as actions from '@/lib/actions/create-comment';

interface ICommentCreateFormProps {
    postId: string;
    parentId?: string;
    startOpen?: boolean;
}

const CommentCreateForm = ({
    postId,
    parentId,
    startOpen,
}: ICommentCreateFormProps) => {
    //
    const [open, setOpen] = useState(startOpen);
    // You can pass additional arguments to a Server Action using the JavaScript bind method.
    // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
    const [formState, formAction] = useFormState(
        actions.createComment.bind(null, { postId, parentId }),
        { errors: {} }
    );
    const formRef = useRef<HTMLFormElement | null>(null);

    //
    useEffect(() => {
        if (formState.success) {
            formRef.current?.reset();

            if (!startOpen) {
                setOpen(false);
            }
        }
    }, [formState, startOpen]);

    const commentForm = (
        <form action={formAction} ref={formRef}>
            <div className='space-y-2 px-1'>
                <Textarea
                    name='content'
                    label='Reply'
                    placeholder='Write comment'
                />
                {formState.errors._form ? (
                    <div className='p-2 bg-red-200 border rounded border-red-400'>
                        {formState.errors._form?.join(', ')}
                    </div>
                ) : null}

                <FormButton>Create Comment</FormButton>
            </div>
        </form>
    );
    //
    return (
        <div>
            <Button
                color='primary'
                size='sm'
                variant='light'
                onClick={() => setOpen(!open)}>
                Reply
            </Button>
            {open && commentForm}
        </div>
    );
};

// ***************************
export default CommentCreateForm;
