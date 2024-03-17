const paths = {
    homePage() {
        return '/';
    },
    topicsPage(topicSlug: string) {
        return `/topics/${topicSlug}`;
    },
    createPostPage(topicSlug: string) {
        return `/topics/${topicSlug}/posts/new`;
    },
    postPage(topicSlug: string, postId: string) {
        return `/topics/${topicSlug}/posts/${postId}`;
    },
};

export default paths;
