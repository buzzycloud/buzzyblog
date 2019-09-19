import React from "react";
import "bulma/css/bulma.min.css";

import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            {/* <NavBar /> */}
            <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
