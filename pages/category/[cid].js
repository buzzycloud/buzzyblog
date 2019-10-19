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
    // const postsRes = await getPosts({ category_id });
    // const tagsRes = await getMetas("tags");

    let [respPosts, respTags] = await Promise.all([getPosts({ category_id }), getMetas("tags")]);
    let posts = respPosts.status == 200 ? [...respPosts.data] : [];
    let tags = {};
    if (respTags.status == 200) {
        for (let tag of respTags.data) {
            tags[tag.id] = tag.slug;
        }
    }
    return { posts, tags };
};

export default CategoryPage;
