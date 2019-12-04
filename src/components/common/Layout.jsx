import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "./NavBar";
import Footer from "./Footer";
import styled, { css } from "styled-components";

const Container = styled.div.attrs({
    className: "container",
})`
    margin: 0 5%;
`;

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <NavBar />
            <Container>{children}</Container>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
