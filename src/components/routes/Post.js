import React from "react";
import { withRouter } from "react-router-dom";

const Post = (props) => {
    const { post } = props.location.state;
    return <div>{post.content.rendered}</div>;
};

export default withRouter(Post);
