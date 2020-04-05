const path = require("path");
module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./"],
                alias: {
                    src: "./src",
                    pages: "./pages",
                    "test": "./test",
                },
            },
        ],
        ["styled-components", { ssr: true }],
    ],
};
