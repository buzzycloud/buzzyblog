import React from "react";
import SideBar from "src/components/common/SideBar";
import SearchContainer from "src/components/posts/SearchContainer";
import { getPosts } from "src/apis/posts";

const SearchResultPage = ({ pinnedPosts }) => {
    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3">
                <SideBar posts={{ pinned: pinnedPosts }} page="search" />
            </div>
            <div className="tile is-9">
                <SearchContainer />
            </div>
        </div>
    );
};

SearchResultPage.getInitialProps = async () => {
    const respStickyPosts = await getPosts({ sticky: true });
    const pinnedPosts = respStickyPosts.status === 200 ? [...respStickyPosts.data] : [];
    return { pinnedPosts };
};

export default SearchResultPage;
