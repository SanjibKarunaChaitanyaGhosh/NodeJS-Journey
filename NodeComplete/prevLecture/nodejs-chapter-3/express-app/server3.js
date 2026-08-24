const express = require("express");

const app = express();
const port = 4001;

app.get("/api/student", (req, res) => {
    res.json({
        id: 101,
        name: "Rahul",
        course: "MERN Stack"
    });
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});