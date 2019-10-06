import React from "react";
import PostFullText from "@/components/posts/PostFullText";
import { getOnePostById } from "@/apis/posts";

const PostPage = ({ post }) => {
    return <PostFullText post={post} />;
};

PostPage.getInitialProps = async ({ req }) => {
    const url = req.originalUrl.split("/")[2];
    const post_id = url.split("-")[0];
    const resp = await getOnePostById(post_id);
    return { post: resp.data };
};

export default PostPage;
