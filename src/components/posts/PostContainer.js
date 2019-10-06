import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostContainer = () => {
    const { postState } = useContext(PostContext);
    // console.log(postState);
    if (postState.all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={postState.all} tags={postState.tags} />;
};

export default PostContainer;
