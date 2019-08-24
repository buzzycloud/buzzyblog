import React, { useContext } from "react";
import { PostContext } from "@/contexts/PostContext";

const PostContainer = () => {
    const { posts } = useContext(PostContext);
    return <h6>Post List</h6>;
};

export default PostContainer;
