const express = require('express');
const app = new express();

app.get('/', (req, res) => {
  res.json(['text', 'date']);
})

app.listen(9999, () => {
  console.log('server is run');
})

