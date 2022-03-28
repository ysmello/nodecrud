import Post from '../../models/post';

export default async function CreatePostConstructor(req, res) {
  const post = await Post.create(req.body);

  return res.send({ post });
}
