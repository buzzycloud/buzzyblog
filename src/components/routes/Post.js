import React from "react";
import { withRouter } from "react-router-dom";

import PostFullText from "@/components/posts/PostFullText";

const Post = (props) => {
    const { post } = props.location.state;
    return <PostFullText post={post} />;
};

export default withRouter(Post);
