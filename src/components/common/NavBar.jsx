import React, { useEffect, useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

import PostContext from "@/contexts/PostContext";
import { getPosts } from "@/apis/posts";
import { getMetas } from "@/apis/metas";
import Search from "./Search";

export default function NavBar(props) {
    /** toggle mobile and desktop */
    const [active, setActive] = React.useState(false);
    const handleNavbarBurgerOnClick = () => {
        setActive((active) => !active);
    };

    /** init context */
    const { dispatch } = useContext(PostContext);

    const initPosts = async () => {
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

        dispatch({
            type: "INIT_POSTS",
            ...posts,
            search: [],
            tags: tags,
        });
    };

    /** init posts when the navbar is rendered for the first time */
    useEffect(() => {
        initPosts();
    }, []);

    return (
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <a href="/">
                            <img src={logo} />
                        </a>
                    </div>
                    <h1 className="navbar-item has-text-black has-text-weight-bold">Yumin's Notes</h1>
                    <a
                        className={active ? "navbar-burger is-active" : "navbar-burger"}
                        onClick={handleNavbarBurgerOnClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">
                                <span className="icon has-text-success">
                                    <i className="fas fa-home"></i>
                                </span>
                                <span>Home</span>
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="navbar-item">
                                <span className="icon has-text-warning">
                                    <i className="fas fa-star"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Search />
                        </div>
                        {/* <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-outlined">Sign up</a>
                                <a className="button is-primary">
                                    <strong>Log in</strong>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
