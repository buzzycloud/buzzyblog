import React from "react";
import BaseContainer from "@/components/posts/BaseContainer";
import SideBar from "@/components/common/SideBar";

/** hide_empty == true, so, a category mush have at least one post */
const CategoryPage = (props) => {
    const { posts } = props.location.state;

    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3">
                <SideBar />
            </div>
            <div className="tile is-9">
                <BaseContainer posts={posts} />
            </div>
        </div>
    );
};

export default CategoryPage;
