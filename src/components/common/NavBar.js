import React, { useCallback } from "react";
import logo from "@/assets/logo.png";

export default function NavBar() {
    const handleNavbarBurgerOnClick = useCallback(() => {
        const els = document.getElementsByClassName("navbar-toggle-active");
        els.forEach((el) => {
            el.classList.toggle("is-active");
        });
    });
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={logo} />
                    </div>
                    <div className="navbar-item">Yumin's Notes</div>
                    <a
                        role="button"
                        className="navbar-burger navbar-toggle-active"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMenuItems"
                        onClick={handleNavbarBurgerOnClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu navbar-toggle-active" id="navbarMenuItems">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">Resume</a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-outlined">Sign up</a>
                                <a className="button is-primary">
                                    <strong>Log in</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
