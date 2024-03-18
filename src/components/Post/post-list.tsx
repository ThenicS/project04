import Link from 'next/link';
//
import paths from '@/paths';

import type { User, Topic, Post } from '@prisma/client';

const PostList = () => {
    return (
        <div>
            <h3>Title: </h3>
            <div>
                <p>Create By: </p>
            </div>
        </div>
    );
};

// ***************************
export default PostList;
