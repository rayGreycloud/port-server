const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public/assets', 'favicon.ico')));
app.use(express.static('public'));

// For use with browserHistory in app.jsx
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server has started on port ${PORT}...`);
});
