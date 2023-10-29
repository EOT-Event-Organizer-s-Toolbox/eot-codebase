import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import router from './modules/routes';
import session from 'express-session';
import { env } from './utils/env';
import path from 'node:path';
import invariant from 'tiny-invariant';

const WEB_DIST_PATH = path.resolve(__dirname, '../../web/dist');

const app = express();
const port = 3000;

invariant(env.SESSION_SECRET);

// middlewares
app.use(express.static(WEB_DIST_PATH));
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

// This is required for a single-page-application.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(WEB_DIST_PATH, 'index.html'));
});

// error handling
app.use(errorHandler);

app.listen(env.PORT || port, () => {
  console.log(`Server listening on port ${env.PORT || port}!`);
});
