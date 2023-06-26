import express from 'express';
import { prisma } from './modules/prisma';
import { errorHandler } from './middleware/errorHandler';
import router from './modules/routes';
const app = express();
const port = 3000;

// middlewares
app.use(express.json());

// routers
app.use('/', router);

// error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
