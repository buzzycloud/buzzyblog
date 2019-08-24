import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/logo.png";

import { searchPosts } from "@/apis/posts";

export default function NavBar() {
    const [active, setActive] = useState(false);
    const handleNavbarBurgerOnClick = () => {
        setActive((active) => !active);
    };

    const [keyword, setKeyword] = useState(null);
    const [posts, setPosts] = useState([]);

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
            let resp = await searchPosts(keyword);
            if (resp.status == 200) {
                setPosts(resp.data);
            } else {
                setPosts(null);
            }
            // console.log(posts);
        }
    };

    return (
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={logo} />
                    </div>
                    <div className="navbar-item">Yumin's Notes</div>
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
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">Resume</a>
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
                                    <FontAwesomeIcon icon={faSearch} />
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
