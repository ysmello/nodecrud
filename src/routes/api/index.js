import express from 'express';

import posts from './posts';

const app = express();

app.use('/api', posts);

export default app;
