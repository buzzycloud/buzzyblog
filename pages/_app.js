import React from "react";
import App from "next/app";
import Head from "next/head";
import styles from "src/assets/styles/global.scss";

import { getPosts } from "src/apis/posts";
import { getMetas } from "src/apis/metas";
import Layout from "src/components/common/Layout";

import { PostContextProvider } from "src/contexts/PostContext";

/**
 * If you need shared components in all your pages (like a menu or a toolbar),
 * take a look at the <App> component instead.
 */
export default class BuzzyBlogApp extends App {
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
