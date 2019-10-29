import React from "react";
import PostFullText from "src/components/posts/PostFullText";
import { getOnePostById } from "src/apis/posts";
import { getMetas } from "src/apis/metas";

const PostPage = ({ post, tags }) => {
    return <PostFullText post={post} tags={tags} />;
};

PostPage.getInitialProps = async ({ req }) => {
    const url = req.originalUrl.split("/")[2];
    const post_id = url.split("-")[0];
    const [respPost, respTags] = await Promise.all([getOnePostById(post_id), getMetas("tags")]);
    const ok = respPost.status == 200;
    const post = ok ? respPost.data : {};
    const tags = {};
    if (respTags.status == 200) {
        for (let tag of respTags.data) {
            tags[tag.id] = tag.slug;
        }
    }
    return { post, tags };
};

export default PostPage;
