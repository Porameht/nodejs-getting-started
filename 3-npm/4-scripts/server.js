const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!!!!');
});

server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running...');
});
