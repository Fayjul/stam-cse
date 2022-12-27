import express from 'express';

const port = 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Allah please help me');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
