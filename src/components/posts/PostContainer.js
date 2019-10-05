import React from "react";
import withPostContext from "@/components/common/withPostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostContainer = (props) => {
    const { postState } = props;
    // console.log(postState);
    if (postState.all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={postState.all} tags={postState.tags} />;
};

export default withPostContext(PostContainer);
