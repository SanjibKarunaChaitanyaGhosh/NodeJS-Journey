const express = require("express");

const app = express();
const port = 4001;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});