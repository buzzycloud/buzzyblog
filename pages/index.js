import React, { useState, useEffect, useContext } from "react";
import SideBar from "src/components/common/SideBar";
import PostsContainer from "src/components/posts/PostsContainer";
import PostContext from "src/contexts/PostContext";
import { getPosts } from "src/apis/posts";
import { getMetas } from "src/apis/metas";
import { ACTIONS } from "src/utils/consts";
import styled from "styled-components";

const IndexContainer = styled.div.attrs({
    className: "tile is-parent is-flex-widescreen",
})``;

const IndexPage = ({ all, pinned, tags }) => {
    const { dispatch } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        dispatch({
            type: ACTIONS.INIT_POSTS,
            val: { all, pinned, tags, search: [] },
        });
        setIsLoading(false);
    }, []);

    return (
        <IndexContainer>
            <div className="tile is-3">
                <SideBar page="index" posts={{ pinned }} />
            </div>
            <div className="tile is-9">
                <PostsContainer isLoading={isLoading} />
            </div>
        </IndexContainer>
    );
};

/**
 * Note: getInitialProps can not be used in children components. Only in pages.
 * 'getInitialProps' would only be called when the component is in the folder './pages'.
 *
 * https://github.com/zeit/next.js/issues/6115
 */
IndexPage.getInitialProps = async () => {
    let [respPosts, respStickyPosts, respTags] = await Promise.all([
        getPosts({ sticky: false }),
        getPosts({ sticky: true }),
        getMetas("tags"),
    ]);
    let all = respPosts.status == 200 ? [...respPosts.data] : [];
    let pinned = respStickyPosts.status == 200 ? [...respStickyPosts.data] : [];

    const tagsOK = respTags.status == 200;
    const tags = tagsOK ? Object.fromEntries(respTags.data.map((tag) => [tag.id, tag.slug])) : {};

    return { all, pinned, tags };
};

export default IndexPage;
