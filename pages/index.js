import React, { useState, useEffect, useContext } from "react";
import SideBar from "@/components/common/SideBar";
import PostContainer from "@/components/posts/PostContainer";
import PostContext from "@/contexts/PostContext";
import { getPosts } from "@/apis/posts";
import { getMetas } from "@/apis/metas";

const IndexPage = ({ all, pinned, tags }) => {
    const { dispatch } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        dispatch({
            type: "INIT_POSTS",
            val: { all, pinned, tags, search: [] },
        });
        setIsLoading(false);
    }, []);

    return (
        <div className="tile is-parent is-flex-widescreen is-x-paddingless-desktop">
            <div className="tile is-3">
                <SideBar />
            </div>
            <div className="tile is-9">
                <PostContainer isLoading={isLoading} />
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
    let ok = respPosts.status == 200;
    let all = ok ? [...respPosts.data] : [];
    let pinned = ok ? respPosts.data.filter((post) => post.sticky) : [];

    let tags = {};
    if (respTags.status == 200) {
        for (let tag of respTags.data) {
            tags[tag.id] = tag.slug;
        }
    }
    return { all, pinned, tags };
};

export default IndexPage;
