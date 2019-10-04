import React from "react";
import SideBar from "@/components/common/SideBar";
import PostContainer from "@/components/posts/PostContainer";

const IndexPage = () => {
    return (
        <div className="tile is-parent is-flex-widescreen is-x-paddingless-desktop">
            <div className="tile is-3">
                <SideBar />
            </div>
            <div className="tile is-9">
                <PostContainer />
            </div>
        </div>
    );
};

export default IndexPage;
