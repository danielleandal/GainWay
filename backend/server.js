const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});