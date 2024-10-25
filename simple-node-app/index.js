// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/node', (req, res) => {
    res.send('Hello from main repo simple-node-app!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
