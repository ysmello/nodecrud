import Post from '../../models/post';

export async function getPostsController(req, res) {
  try {
    const { limit, page } = req.params;

    const posts = await Post.find()
      .limit(limit)
      .skip(limit * page);

    return res.send({ posts });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}

export async function findOnePostController(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send({ status: 404 });
    }

    const post = await Post.findById(req.params.id);

    return res.send({ post });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
