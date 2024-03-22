'use client';

//
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/lib/actions';

const SearchPostInput = () => {
    const searchPostParams = useSearchParams();
    // console.log(searchPostParams);

    return (
        <form action={actions.searchPosts}>
            <Input
                name='term'
                defaultValue={searchPostParams.get('term') || ''}
            />
        </form>
    );
};

// ***************************
export default SearchPostInput;
