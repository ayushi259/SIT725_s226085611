const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

// API routes
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: Number(a) + Number(b) });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: Number(a) - Number(b) });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    res.json({ result: Number(a) * Number(b) });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (Number(b) === 0) {
        return res.json({ error: "Cannot divide by zero" });
    }
    res.json({ result: Number(a) / Number(b) });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});