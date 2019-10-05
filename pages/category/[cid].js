import React from "react";
import BaseContainer from "@/components/posts/BaseContainer";
import SideBar from "@/components/common/SideBar";
import withPostContext from "@/components/common/withPostContext";
import { useRouter } from "next/router";

/** hide_empty == true, so, a category mush have at least one post */
const CategoryPage = ({ postState }) => {
    const { all, tags } = postState;
    const router = useRouter();
    const c_id = router.query.cid.split("-")[0];

    const posts =
        c_id == "all"
            ? all
            : all.filter((post) => {
                  return post.categories[0] == c_id;
              });

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
