import { Router } from 'express';

import createPostController from '../../controllers/posts/CreatePostController';

const router = Router();

router.post('/posts', createPostController);

export default router;
