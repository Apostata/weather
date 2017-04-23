const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Create our app
const app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
  next();
});

app.use(express.static('public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Express server is up on PORT ${PORT}`);
});
