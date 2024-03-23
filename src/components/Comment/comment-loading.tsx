import { Skeleton } from '@nextui-org/react';

const CommentLoading = () => {
    //
    return (
        <div className='m-4'>
            <div className='my-2'>
                <Skeleton className='h-8 w-48'></Skeleton>
            </div>
            <div className='p-4 border rounded space-y-2'>
                <Skeleton className='h-6 w-32' />
                <Skeleton className='h-6 w-64' />
                <Skeleton className='h-6 w-128' />
            </div>
        </div>
    );
};

// ***************************
export default CommentLoading;
