const compose = require("lodash/fp/compose");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

function HACK_removeMinimizeOptionFromCssLoaders(config) {
    console.warn("HACK: Removing `minimize` option from `css-loader` entries in Webpack config");
    config.module.rules.forEach((rule) => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach((u) => {
                if (u.loader === "css-loader" && u.options) {
                    delete u.options.minimize;
                }
            });
        }
    });
}

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
    distDir: "dist",
    env: {
        HTML_TITLE: "Yumin's Notes",
    },
    webpack(config, options) {
        config.module.rules.push(fileLoaderRule);
        HACK_removeMinimizeOptionFromCssLoaders(config); //http://bit.ly/nextjs-css-loader-bug
        return config;
    },
});
