import express from 'express';

import routerPosts from './posts';

const app = express();

app.use('/api', routerPosts);

export default app;
