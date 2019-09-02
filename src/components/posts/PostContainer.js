import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostContainer = () => {
    const { posts } = useContext(PostContext);
    // console.log(posts);
    if (posts.all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={posts.all} />;
};

export default PostContainer;
