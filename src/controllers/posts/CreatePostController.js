import Post from '../../models/post';

export default async function createPostController(req, res) {
  try {
    const post = await Post.create(req.body);

    return res.json({ post });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
