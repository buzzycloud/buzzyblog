const compose = require("lodash/fp/compose");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const buzzy = require("./buzzy.config");

const enhance = compose(
    withCss,
    withSass
);

const fileLoaderRule = {
    test: /\.(jpe?g|png|gif|svg|ico|ttf|eot|woff|woff2|otf|webp)$/,
    use: [
        {
            loader: "url-loader",
        },
    ],
};

module.exports = enhance({
    // cssModules: true,
    target: "server",
    compress: true,
    distDir: "dist",
    env: {
        ...buzzy.env,
    },
    poweredByHeader: false,
    webpack(config, options) {
        config.module.rules.push(fileLoaderRule);
        return config;
    },
});

//http://bit.ly/nextjs-css-loader-bug this bug is fixed in v9.1.2-canary.1
