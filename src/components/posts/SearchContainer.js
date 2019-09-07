import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";
import PropTypes from "prop-types";

const SearchContainer = (props) => {
    const { posts } = useContext(PostContext);
    // console.log(posts);
    if (posts.search.length === 0) {
        return <NoPostMessage msg="Posts Not Found" />;
    }

    return <BaseContainer posts={posts.search} />;
};

SearchContainer.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default SearchContainer;
