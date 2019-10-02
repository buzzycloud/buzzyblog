import React from "react";
import withPostContext from "@/components/common/withPostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostContainer = (props) => {
    const { postState } = props;
    // console.log(posts);
    if (postState.all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={postState.all} />;
};

export default withPostContext(PostContainer);
