import * as actions from '@/lib/actions';
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
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={actions.createTopic}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create Topic</h3>
                        <Input
                            name='name'
                            label='Name'
                            labelPlacement='outside'
                            placeholder='Name...'
                        />
                        <Textarea
                            name='description'
                            label='Description'
                            labelPlacement='outside'
                            placeholder='Description...'
                        />
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
};

// ***************************
export default TopicCreateForm;
