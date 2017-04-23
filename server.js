const express = require('express');
const path = require('path');

// Create our app
const app = express();

app.use(express.static('public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
