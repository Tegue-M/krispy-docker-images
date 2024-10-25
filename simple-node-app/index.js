// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/node', (req, res) => {
    res.send('Hello from simple-node-app!');
});

app.listen(PORT, () => {
    console.log(`Lekker, server is running on port ${PORT}`);
});
