import React, { useContext } from "react";
import PropTypes from "prop-types";
import PostContext from "src/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const PostsContainer = ({ isLoading }) => {
    if (isLoading) {
        return <div>page is loading....</div>;
    }

    const {
        postState: { all, pinned, tags },
    } = useContext(PostContext);
    // console.log(tags);
    if (all.length === 0) {
        return <NoPostMessage msg="The author hasn't published any posts!" />;
    }

    return <BaseContainer posts={[...all, ...pinned]} tags={tags} />;
};

PostsContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default PostsContainer;
