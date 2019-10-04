import React from "react";
import PostFullText from "@/components/posts/PostFullText";
import { useRouter } from "next/router";

const PostPage = () => {
    const router = useRouter();
    const { pid } = router.query;

    return <PostFullText post_id={post_id} />;
};

// PostPage.getInitialProps = ({ req }) => {
//     return {} // the return value will be part of the props
// };

export default PostPage;
