import Document, { Html, Head, Main, NextScript } from "next/document";
import * as Sentry from "@sentry/browser";

process.on("unhandledRejection", (err) => {
    Sentry.captureException(err);
});

process.on("uncaughtException", (err) => {
    Sentry.captureException(err);
});

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return { ...initialProps };
    // }

    render() {
        return (
            <Html>
                <Head>
                    <link type="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
