import React from "react";
import App from "next/app";
import Router from "next/router";
import { initGA, logPageView } from "src/utils/google";
import Head from "next/head";
import styles from "src/assets/styles/global.scss";

import Layout from "src/components/common/Layout";

import { PostContextProvider } from "src/contexts/PostContext";

/**
 * If you need shared components in all your pages (like a menu or a toolbar),
 * take a look at the <App> component instead.
 */
export default class BuzzyBlogApp extends App {
    componentDidMount() {
        initGA();
        logPageView();
        Router.router.events.on("routeChangeComplete", logPageView);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <PostContextProvider>
                <Head>
                    <title>{process.env.HTML_TITLE}</title>
                </Head>
                <style jsx global>
                    {styles}
                </style>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PostContextProvider>
        );
    }
}
