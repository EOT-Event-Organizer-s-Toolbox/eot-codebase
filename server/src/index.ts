import fs from 'fs';

import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});