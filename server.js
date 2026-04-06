const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'financial-view-v3.3.html'));
});

app.listen(PORT, () => {
    console.log('Financial View running on port ' + PORT);
});
