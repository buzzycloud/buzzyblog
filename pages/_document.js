import Document, { Html, Head, Main, NextScript } from "next/document";
import styles from "src/assets/styles/global.scss";

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
                    <style jsx global>
                        {styles}
                    </style>
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
