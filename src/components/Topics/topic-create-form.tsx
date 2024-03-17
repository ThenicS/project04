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
//

const TopicCreateForm = () => {
    //
    const [formState, formAction] = useFormState(actions.createTopic, {
        errors: {},
    });
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={formAction}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create Topic</h3>
                        <Input
                            name='name'
                            label='Name'
                            labelPlacement='outside'
                            placeholder='Name'
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')}
                        />
                        <Textarea
                            name='description'
                            label='Description'
                            labelPlacement='outside'
                            placeholder='Description...'
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(
                                ', '
                            )}
                        />
                        {formState.errors._form ? (
                            <div className='p-2 bg-red-200 border border-red-400 rounded-xl'>
                                {formState.errors._form?.join(', ')}
                            </div>
                        ) : null}
                        <FormButton children={'Submit'}></FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
};

// ***************************
export default TopicCreateForm;
