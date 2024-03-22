//

import { redirect } from 'next/navigation';
import { fetchSearchPosts } from '@/lib/queries/posts';
import PostList from '@/components/Post/post-list';
//
interface ISearchPostsPageProps {
    //
    searchParams: {
        term: string;
    };
}

export default async function SearchPostsPage({
    searchParams,
}: ISearchPostsPageProps) {
    //
    const { term } = searchParams;
    // console.log(term)

    if (!term) {
        redirect('/');
    }

    return (
        <div>
            <PostList fetchData={() => fetchSearchPosts(term)} />
        </div>
    );
}
