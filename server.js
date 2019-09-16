const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const next = require("next")({ dev });
const handle = next.getRequestHandler();

next.prepare().then(() => {
    const server = express();
    server.get("*", (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 8081;

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
