const path = require("path");
module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "module-resolver",
            {
                "root": ["./src"],
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
