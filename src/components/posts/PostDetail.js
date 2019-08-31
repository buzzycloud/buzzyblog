import React from "react";
import parse from "html-react-parser";

const PostDetail = ({ post }) => {
    const title = parse(post.title.rendered);
    const body = parse(post.content.rendered);
    return <div> {body}</div>;
};

export default PostDetail;
