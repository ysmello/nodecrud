import request from 'supertest';
import api from '../src/routes/api';

import { getPostsController } from '../src/controllers/posts/GetPostsController';

describe('posts', () => {
  it('get all posts', async () => {
    const posts = await getPostsController();
  });
});
