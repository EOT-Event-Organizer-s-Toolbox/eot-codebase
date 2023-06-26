import fs from 'fs';

import express from 'express';
import router from './modules/routes';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
