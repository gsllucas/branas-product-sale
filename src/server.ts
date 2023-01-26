import express from 'express';
import env from 'dotenv';

env.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`Started server, port ${port}`);
});
