import React from "react";
import withPostContext from "@/components/common/withPostContext";
import BaseContainer from "./BaseContainer";
import NoPostMessage from "./NoPostMessage";

const SearchContainer = (props) => {
    const { postState } = props;
    if (postState.search.length === 0) {
        return <NoPostMessage msg="Posts Not Found" />;
    }

    return <BaseContainer posts={postState.search} />;
};

export default withPostContext(SearchContainer);
