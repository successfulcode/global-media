const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express.js is working...');
});

app.listen(port, () => {
  console.log(`Server start on port ${port}...`);
});
