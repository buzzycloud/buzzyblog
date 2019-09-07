import React from "react";
import SideBar from "@/components/common/SideBar";
import PostContainer from "@/components/posts/PostContainer";

const Homepage = () => {
    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3" style={{ padding: "0.75rem" }}>
                <SideBar />
            </div>
            <div className="tile is-9">
                <PostContainer />
            </div>
        </div>
    );
};

export default Homepage;
