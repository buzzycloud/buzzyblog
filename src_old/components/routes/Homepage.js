import React from "react";
import SideBar from "@/components/common/SideBar";
import PostContainer from "@/components/posts/PostContainer";

import "@/assets/css/global.css";
import "@/assets/css/routes-Homepage.css";

const Homepage = () => {
    return (
        <div className="tile is-parent is-flex-widescreen homepage-is-left-paddingless-desktop">
            <div className="tile is-3 is-x-paddingless">
                <SideBar />
            </div>
            <div className="tile is-9">
                <PostContainer />
            </div>
        </div>
    );
};

export default Homepage;
