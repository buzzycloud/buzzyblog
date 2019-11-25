import React from "react";
import App from "next/app";
import * as Sentry from "@sentry/browser";
import Router from "next/router";
import styles from "src/assets/styles/global.scss";
import { initGA, logPageView } from "src/utils/google";
import Head from "next/head";

Sentry.init({ dsn: process.env.SENTRY_DSN });

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

    componentDidCatch(error, errorInfo) {
        Sentry.withScope((scope) => {
            Object.keys(errorInfo).forEach((key) => {
                scope.setExtra(key, errorInfo[key]);
            });

            Sentry.captureException(error);
        });

        super.componentDidCatch(error, errorInfo);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <PostContextProvider>
                <Head>
                    <title>{process.env.HTML_TITLE}</title>
                    <style jsx global>
                        {styles}
                    </style>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PostContextProvider>
        );
    }
}
