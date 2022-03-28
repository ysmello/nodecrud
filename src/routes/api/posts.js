import { Router } from 'express';
import Joi from 'joi';

import validationMiddleware from '../../helpers/validationMiddleware';

import createPostController from '../../controllers/posts/CreatePostController';
import updatePostController from '../../controllers/posts/UpdatePostController';
import deletePostController from '../../controllers/posts/DeletePostController';
import {
  getPostsController,
  findOnePostController,
} from '../../controllers/posts/GetPostsController';

const router = Router();

const schemaPost = Joi.object().keys({
  title: Joi.string().required(),
  body: Joi.string().min(6),
  tags: Joi.array().min(1),
});

router.post('/posts', validationMiddleware(schemaPost), createPostController);
router.get('/posts/:page/:limit', getPostsController);
router.get('/posts/:id', findOnePostController);
router.put(
  '/posts/:id',
  validationMiddleware(schemaPost),
  updatePostController
);
router.delete('/posts/:id', deletePostController);

export default router;
