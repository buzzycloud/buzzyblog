import React from "react";
import App from "next/app";
import Head from "next/head";
import styles from "@/assets/styles/global.scss";

import { getPosts } from "@/apis/posts";
import { getMetas } from "@/apis/metas";
import Layout from "@/components/common/Layout";

import { PostContextProvider } from "@/contexts/PostContext";

/**
 * If you need shared components in all your pages (like a menu or a toolbar),
 * take a look at the <App> component instead.
 */
class MyApp extends App {
    /**
     * Note: getInitialProps can not be used in children components. Only in pages.
     * 'getInitialProps' would only be called when the component is in the folder './pages'.
     *
     * https://github.com/zeit/next.js/issues/6115
     */
    static async getInitialProps() {
        let [respPosts, respTags] = await Promise.all([getPosts(), getMetas("tags")]);
        let ok = respPosts.status == 200;
        let posts = {
            all: ok ? [...respPosts.data] : [],
            pinned: ok ? respPosts.data.filter((post) => post.sticky) : [],
        };

        let tags = {};
        ok = respTags.status == 200;
        if (ok) {
            for (let tag of respTags.data) {
                tags[tag.id] = tag.slug;
            }
        }
        return { posts, tags };
    }

    render() {
        const { Component, pageProps, posts, tags } = this.props;
        return (
            <PostContextProvider>
                <Head>
                    <title>{process.env.HTML_TITLE}</title>
                </Head>
                <style jsx global>
                    {styles}
                </style>
                <Layout posts={posts} tags={tags}>
                    <Component {...pageProps} />
                </Layout>
            </PostContextProvider>
        );
    }
}

export default MyApp;
