import React from "react";
import logo from "src/assets/logo.png";
import Link from "next/link";

import SearchBar from "./SearchBar";

export default function NavBar() {
    /** toggle navbav expand status when mobile */
    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleNavbarBurgerOnClick = () => {
        setIsExpanded((isExpanded) => !isExpanded);
    };

    return (
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <img src={logo} />
                        </a>
                    </Link>
                    <h1 className="navbar-item has-text-black has-text-weight-bold">Yumin's Notes</h1>
                    <a
                        className={isExpanded ? "navbar-burger is-active" : "navbar-burger"}
                        onClick={handleNavbarBurgerOnClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={isExpanded ? "navbar-menu is-active" : "navbar-menu"}>
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
                            <SearchBar />
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
