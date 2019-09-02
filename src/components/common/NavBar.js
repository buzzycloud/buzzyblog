import React, { useState, useEffect, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "@/assets/logo.png";

import PostContext from "@/contexts/PostContext";
import { getPosts, searchPosts } from "@/apis/posts";

/** function hoist */
export default withRouter(NavBar);

function NavBar(props) {
    /** toggle mobile and desktop */
    const [active, setActive] = useState(false);
    const handleNavbarBurgerOnClick = () => {
        setActive((active) => !active);
    };

    const initPosts = async () => {
        let resp = await getPosts();
        if (resp.status == 200) {
            dispatch({
                type: "INIT_POSTS",
                all: resp.data,
                pinned: resp.data.filter((post) => post.sticky),
            });
        } else {
            dispatch({
                type: "INIT_POSTS",
                all: [],
                pinned: [],
            });
        }
    };

    /** init posts when the navbar is rendered for the first time */
    useEffect(() => {
        initPosts();
    }, []);

    /** search posts */
    const [keyword, setKeyword] = useState(null);
    const { dispatch } = useContext(PostContext);

    const handleInpuOnChange = (value) => {
        setKeyword(value);
    };
    const handleEnterKeyUp = async (key) => {
        if (key === "Enter") {
            await search();
        }
    };
    const handleSearchIconOnClick = async () => {
        await search();
    };

    /** for now, not able to search the title field */
    const search = async () => {
        if (!!keyword) {
            let resp = await searchPosts({ keyword: keyword });
            if (resp.status == 200) {
                dispatch({
                    type: "SEARCH_POSTS",
                    all: resp.data,
                });
            } else {
                dispatch({
                    type: "SEARCH_POSTS",
                    all: [],
                });
            }
            // console.log(posts);
            if (props.location.pathname !== "/") {
                props.history.push({
                    pathname: `/`,
                });
            }
        }
    };

    // click logo or Home
    const handleGoHome = async () => {
        await initPosts();
        if (props.location.pathname !== "/") {
            props.history.push({
                pathname: `/`,
            });
        }
    };

    return (
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <a onClick={handleGoHome}>
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="navbar-item has-text-black has-text-weight-bold">Yumin's Notes</div>
                    <a
                        className={active ? "navbar-burger is-active" : "navbar-burger"}
                        onClick={handleNavbarBurgerOnClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
                    <div className="navbar-start">
                        <a className="navbar-item" onClick={handleGoHome}>
                            <span className="icon has-text-success">
                                <i className="fas fa-home"></i>
                            </span>
                            <span>Home</span>
                        </a>
                        <NavLink className="navbar-item" to="/resume">
                            <span className="icon has-text-warning">
                                <i className="fas fa-star"></i>
                            </span>
                            <span>Resume</span>
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <p className="control has-icons-right">
                                <input
                                    className="input is-rounded is-focused"
                                    type="email"
                                    placeholder="Search"
                                    autoFocus
                                    onChange={({ target: { value } }) => handleInpuOnChange(value)}
                                    onKeyUp={({ key }) => handleEnterKeyUp(key)}
                                />
                                <span
                                    className="icon is-right"
                                    onClick={handleSearchIconOnClick}
                                    style={{ pointerEvents: "auto", cursor: "pointer" }}>
                                    <i className="fas fa-search"></i>
                                </span>
                            </p>
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
