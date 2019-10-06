import React, { useEffect, useContext } from "react";
import SideBar from "@/components/common/SideBar";
import PostContainer from "@/components/posts/PostContainer";
import PostContext from "@/contexts/PostContext";
import { getPosts } from "@/apis/posts";
import { getMetas } from "@/apis/metas";

const IndexPage = ({ posts, tags }) => {
    const { dispatch } = useContext(PostContext);
    useEffect(() => {
        dispatch({
            type: "INIT_POSTS",
            ...posts,
            search: [],
            tags: tags,
        });
    }, []);

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

/**
 * Note: getInitialProps can not be used in children components. Only in pages.
 * 'getInitialProps' would only be called when the component is in the folder './pages'.
 *
 * https://github.com/zeit/next.js/issues/6115
 */
IndexPage.getInitialProps = async () => {
    let [respPosts, respTags] = await Promise.all([getPosts(), getMetas("tags")]);
    let posts =
        respPosts.status == 200
            ? {
                  all: [...respPosts.data],
                  pinned: respPosts.data.filter((post) => post.sticky),
              }
            : {
                  all: [],
                  pinned: [],
              };

    let tags = {};
    if (respTags.status == 200) {
        for (let tag of respTags.data) {
            tags[tag.id] = tag.slug;
        }
    }
    return { posts, tags };
};

export default IndexPage;
