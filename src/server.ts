import express from 'express';

import './database'

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' });
})

app.listen(3333, () => console.log('Server is runing ⚡, in port 3333 📌'));