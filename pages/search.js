import React from "react";
import SideBar from "src/components/common/SideBar";
import SearchContainer from "src/components/posts/SearchContainer";

const SearchResultPage = () => {
    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3">
                <SideBar />
            </div>
            <div className="tile is-9">
                <SearchContainer />
            </div>
        </div>
    );
};

export default SearchResultPage;
