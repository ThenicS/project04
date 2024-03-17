const paths = {
    homePage() {
        return '/';
    },
    topicsPage(topicSlug: string) {
        return `/topics/${topicSlug}`;
    },
    createPostPage(topicSlug: string) {
        return `/topics/${topicSlug}/post/new`;
    },
    postPage(topicSlug: string, postId: string) {
        return `topics/${topicSlug}/post/${postId}`;
    },
};

export default paths;
