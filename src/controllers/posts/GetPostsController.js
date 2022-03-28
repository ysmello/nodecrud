import Post from '../../models/post';

export async function getPostsController(req, res) {
  const posts = await Post.find();

  return res.send({ posts });
}

export async function findOnePostController(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.send({ status: 404 });
  }

  const post = await Post.findById(req.params.id);

  return res.send({ post });
}
