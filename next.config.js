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

module.exports = enhance({
    // cssModules: true,
    target: "server",
    distDir: "dist",
    webpack(config, options) {
        HACK_removeMinimizeOptionFromCssLoaders(config); //http://bit.ly/nextjs-css-loader-bug
        return config;
    },
});
