import { Router } from 'express';

import createPostController from '../../controllers/posts/CreatePostController';
import updatePostController from '../../controllers/posts/UpdatePostController';
import deletePostController from '../../controllers/posts/DeletePostController';
import {
  getPostsController,
  findOnePostController,
} from '../../controllers/posts/GetPostsController';

const router = Router();

router.post('/posts', createPostController);
router.get('/posts', getPostsController);
router.get('/posts/:id', findOnePostController);
router.put('/posts/:id', updatePostController);
router.delete('/posts/:id', deletePostController);

export default router;
