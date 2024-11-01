// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/node', (req, res) => {
    res.send('Hello, testing from shared services!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
