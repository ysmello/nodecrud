import { Router } from 'express';

import createPostController from '../../controllers/posts/CreatePostController';
import getPostsController from '../../controllers/posts/GetPostsController';

const router = Router();

router.post('/posts', createPostController);
router.get('/posts', getPostsController);

export default router;
