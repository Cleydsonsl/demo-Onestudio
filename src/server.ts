import express from 'express';

import './database'
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes)

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' });
})

app.listen(3333, () => console.log('Server is runing ⚡, in port 3333 📌'));