import Post from '../../models/post';

export default async function updatePostController(req, res) {
  try {
    const { id } = req.params;

    const findedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.send(findedPost);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
