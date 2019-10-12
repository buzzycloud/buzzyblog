import React, { useContext } from "react";
import PostContext from "src/contexts/PostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const SearchContainer = () => {
    const {
        postState: { search, tags },
    } = useContext(PostContext);

    if (search.length === 0) {
        return <NoPostMessage msg="Posts Not Found" />;
    }

    return <BaseContainer posts={search} tags={tags} />;
};

export default SearchContainer;
