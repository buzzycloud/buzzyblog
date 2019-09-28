import React from "react";
import App from "next/app";
import Head from "next/head";

import { PostContextProvider } from "@/contexts/PostContext";

/**
 * If you need shared components in all your pages (like a menu or a toolbar),
 * take a look at the <App> component instead.
 */
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <PostContextProvider>
                <Head>
                    <title>{process.env.HTML_TITLE}</title>
                </Head>
                <Component {...pageProps} />
            </PostContextProvider>
        );
    }
}

export default MyApp;
