import React, { useContext } from "react";
import PostContext from "@/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const SearchContainer = () => {
    const { postState } = useContext(PostContext);
    if (postState.search.length === 0) {
        return <NoPostMessage msg="Posts Not Found" />;
    }

    return <BaseContainer posts={postState.search} />;
};

export default SearchContainer;
