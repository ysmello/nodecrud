import Post from '../../models/post';

export default async function GetPostsConstructor(req, res) {
  const posts = await Post.find();

  return res.send({ posts });
}
