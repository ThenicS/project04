//
//
//
import { notFound } from 'next/navigation';
interface IPostPageProps {
    params: {
        slug: string;
        postId: string;
    };
}
export default function PostPage({ params }: IPostPageProps) {
    console.log(params);
    const { slug, postId } = params;

    return (
        <div>
            <h3>Post Page</h3>
            <h3>Topic: {slug}</h3>
            <h4>postId: {postId}</h4>
        </div>
    );
}
