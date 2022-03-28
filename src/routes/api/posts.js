import { Router } from 'express';

import createPostController from '../../controllers/posts/CreatePostController';
import {
  getPostsController,
  findOnePostController,
} from '../../controllers/posts/GetPostsController';

const router = Router();

router.post('/posts', createPostController);
router.get('/posts', getPostsController);
router.get('/posts/:id', findOnePostController);

export default router;
