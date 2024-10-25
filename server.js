const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Send the HTML file as a response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Change 'yourfile.html' to your HTML file name
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});