//
//
//

interface IPostShow {}

const PostShow = ({}: IPostShow) => {
    return (
        <div className='m-4'>
            <h1 className='text-2xl font-bold my-2'>{post.title}</h1>
            <p className='p-4 border rounded'>{post.content}</p>
        </div>
    );
};

// ***************************
export default PostShow;