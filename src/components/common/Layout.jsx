import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { PostContextProvider } from "@/contexts/PostContext";

import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <React.Fragment>
            <PostContextProvider>
                <Head>
                    <title>{process.env.HTML_TITLE}</title>
                </Head>
                <NavBar />
                <div className="container" style={{ minHeight: "calc(80vh - 70px)" }}>
                    {props.children}
                </div>
                <Footer />
            </PostContextProvider>
        </React.Fragment>
    );
}
