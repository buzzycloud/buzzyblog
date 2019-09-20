import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
}
