import React from "react";
import BaseContainer from "src/components/posts/BaseContainer";
import SideBar from "src/components/common/SideBar";
import { getPosts } from "src/apis/posts";
import { getMetas } from "src/apis/metas";

/** hide_empty == true, so, a category mush have at least one post */
const CategoryPage = ({ posts, tags }) => {
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

CategoryPage.getInitialProps = async ({ req }) => {
    const url = req.originalUrl.split("/")[2];
    const category_id = url == "all" ? "" : url.split("-")[0];
    const postsRes = await getPosts({ category_id });
    const tagsRes = await getMetas("tags");
    return {
        posts: postsRes.status == 200 ? postsRes.data : [],
        tags: tagsRes.status == 200 ? tagsRes.data : {},
    };
};

export default CategoryPage;
