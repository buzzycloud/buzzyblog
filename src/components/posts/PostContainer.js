import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostContainer = () => {
    const { postContext } = useContext(PostContext);
    // console.log(posts);
    if (postContext.all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={postContext.all} />;
};

export default PostContainer;
