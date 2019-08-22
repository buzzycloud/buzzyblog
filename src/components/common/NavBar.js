import React from "react";
import logo from "@/assets/logo.png";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={logo} />
                    </div>
                    <div className="navbar-item">CMS2</div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
