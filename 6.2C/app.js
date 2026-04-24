const express = require('express');
const app = express();

app.use(express.json());

// Sample API endpoint
app.get('/api/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    res.json({ message: `Hello, ${name}!` });
});

module.exports = app;