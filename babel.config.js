const path = require("path");
module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "module-resolver",
            {
                root: [path.resolve("./")],
                alias: {
                    src: path.resolve(__dirname, "src/"),
                    pages: path.resolve(__dirname, "pages/"),
                },
            },
        ],
    ],
};
