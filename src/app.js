import express from 'express';

import api from './routes/api';

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(api);

app.listen(port, () => {
  console.log('running');
});
