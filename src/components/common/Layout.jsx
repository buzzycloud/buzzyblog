import React, { useEffect } from "react";
import withPostContext from "@/components/common/withPostContext";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import fetch from "isomorphic-unfetch";

import NavBar from "./NavBar";
import Footer from "./Footer";

import { getPosts } from "@/apis/posts";
import { getMetas } from "@/apis/metas";

const Layout = ({ dispatch, children }) => {
    // console.log(posts);
    /** init posts when the navbar is rendered for the first time */

    const initPostState = async () => {
        let [respPosts, respTags] = await Promise.all([getPosts(), getMetas("tags")]);
        let ok = respPosts.status == 200;
        let posts = {
            all: ok ? [...respPosts.data] : [],
            pinned: ok ? respPosts.data.filter((post) => post.sticky) : [],
        };

        let tags = {};
        ok = respTags.status == 200;
        if (ok) {
            for (let tag of respTags.data) {
                tags[tag.id] = tag.slug;
            }
        }

        dispatch({
            type: "INIT_POSTS",
            ...posts,
            search: [],
            tags: tags,
        });
    };

    useEffect(() => {
        initPostState();
    }, []);

    return (
        <React.Fragment>
            <NavBar />
            <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default withPostContext(Layout);
