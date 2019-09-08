import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const SearchContainer = () => {
    const { postContext } = useContext(PostContext);
    // console.log(posts);
    if (postContext.search.length === 0) {
        return <NoPostMessage msg="Posts Not Found" />;
    }

    return <BaseContainer posts={postContext.search} />;
};

export default SearchContainer;
