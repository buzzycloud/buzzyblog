import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container">{children}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
