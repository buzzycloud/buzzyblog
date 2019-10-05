import React from "react";
import BaseContainer from "@/components/posts/BaseContainer";
import SideBar from "@/components/common/SideBar";
import withPostContext from "@/components/common/withPostContext";
import { useRouter } from "next/router";

/** hide_empty == true, so, a category mush have at least one post */
const CategoryPage = ({ postState }) => {
    const router = useRouter();
    console.log(postState, router.query);
    return <div>hh</div>;

    const { posts, tags } = postState;

    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3">
                <SideBar />
            </div>
            <div className="tile is-9">
                <BaseContainer posts={posts} tags={tags} />
            </div>
        </div>
    );
};

export default withPostContext(CategoryPage);
