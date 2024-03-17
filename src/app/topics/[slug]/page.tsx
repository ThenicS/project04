//
//
import PostCreateForm from '@/components/Post/post-create-form';

interface ITopicShowPageProps {
    params: {
        slug: string;
    };
}

export default function TopicPage({ params }: ITopicShowPageProps) {
    const { slug } = params;
    return (
        <div className='grid grid-cols-4 gap-4 p-4'>
            <div className='col-span-3'>
                <h1 className='text-2xl font-bold mb-2'>{slug}</h1>
            </div>
            <div>
                <PostCreateForm />
            </div>
        </div>
    );
}
