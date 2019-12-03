import React from "react";
import BaseContainer from "src/components/posts/BaseContainer";
import SideBar from "src/components/common/SideBar";
import { getPosts } from "src/apis/posts";
import { getMetas } from "src/apis/metas";

/** hide_empty == true, so, a category mush have at least one post */
const CategoryPage = ({ allPosts, pinnedPosts, tags }) => {
    return (
        <div className="tile is-parent is-flex-widescreen">
            <div className="tile is-3">
                <SideBar posts={{ pinned: pinnedPosts }} page="category" />
            </div>
            <div className="tile is-9">
                <BaseContainer posts={[...allPosts, ...pinnedPosts]} tags={tags} />
            </div>
        </div>
    );
};

CategoryPage.getInitialProps = async ({ req }) => {
    const url = req.originalUrl.split("/")[2];
    const category_id = url == "all" ? "" : url.split("-")[0];

    const [respPosts, respStickyPosts, respTags] = await Promise.all([
        getPosts({ category_id, sticky: false }),
        getPosts({ category_id, sticky: true }), // sticky posts in this category
        getMetas("tags"),
    ]);
    const allPosts = respPosts.status === 200 ? [...respPosts.data] : [];
    const pinnedPosts = respStickyPosts.status === 200 ? [...respStickyPosts.data] : [];
    const tags = respTags.status === 200 ? Object.fromEntries(respTags.data.map((tag) => [tag.id, tag.slug])) : {};

    return { allPosts, pinnedPosts, tags };
};

export default CategoryPage;
