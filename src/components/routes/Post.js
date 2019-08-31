import React from "react";
import { withRouter } from "react-router-dom";

import PostDetail from "@/components/posts/PostDetail";

const Post = (props) => {
    const { post } = props.location.state;
    return <PostDetail post={post} />;
};

export default withRouter(Post);
