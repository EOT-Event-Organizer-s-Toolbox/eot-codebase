import express from 'express';
import { prisma } from './modules/prisma';
import { errorHandler } from './middleware/errorHandler';
import router from './modules/routes';
import cors from 'cors';
import session from 'express-session';
import { env } from './utils/env';

const app = express();
const port = 3000;

// middlewares
/* CORS policy for localhost in development.  will need to be updated for production. */
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

// routers
app.use('/', router);

// error handling
app.use(errorHandler);

app.listen(env.PORT || port, () => {
  console.log(`Server listening on port ${env.PORT || port}!`);
});
