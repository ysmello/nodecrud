import Post from '../../models/post';

export default async function deletePostController(req, res) {
  try {
    await Post.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
