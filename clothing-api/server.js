const express = require('express');
const app = express();
const PORT = 3000; // Choose any available port

// Your JSON data
const clothingData = require('./db.json');

// Route to get all dresses
app.get('/dresses', (req, res) => {
    res.json(clothingData.dresses);
});

// Route to get all trousers for men
app.get('/trousers-men', (req, res) => {
    res.json(clothingData.trousers_men);
});

// Add routes for other endpoints as needed...

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
