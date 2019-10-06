import React, { useEffect } from "react";
import withPostContext from "@/components/common/withPostContext";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ dispatch, posts, tags, children }) => {
    /** init posts when the navbar is rendered for the first time */
    useEffect(() => {
        dispatch({
            type: "INIT_POSTS",
            ...posts,
            search: [],
            tags: tags,
        });
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
