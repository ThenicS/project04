//
//
import PostList from '@/components/Post/post-list';
import { fetchPostByTopicSlug } from '@/lib/queries/posts';
import PostCreateForm from '@/components/Post/post-create-form';

interface ITopicPageProps {
    params: {
        slug: string;
    };
}

export const metadata = {
    title: 'ZodCode Topic Page',
    description: 'Code Diff description',
};

export default function TopicPage({ params }: ITopicPageProps) {
    const { slug } = params;
    return (
        <div className='grid grid-cols-4 gap-4 p-4'>
            <div className='col-span-3'>
                <h1 className='text-2xl font-bold mb-2'>{slug}</h1>

                <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
            </div>
            <div>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    );
}
