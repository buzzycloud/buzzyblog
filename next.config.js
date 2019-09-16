const compose = require("lodash/fp/compose");

const withCSS = require("@zeit/next-css");
const path = require("path");

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

const enhance = compose(withCSS);

module.exports = enhance({
    // cssModules: true,
    target: "server",
    distDir: "dist",
    webpack(config, options) {
        HACK_removeMinimizeOptionFromCssLoaders(config);
        return config;
    },
});
