import React from "react";
import logo from "@/assets/logo.png";

export default function NavBar() {
    return (
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src={logo} />
                    </a>
                </div>
                <div class="navbar-menu"></div>
            </div>
        </nav>
    );
}
