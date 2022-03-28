import Post from '../../models/post';

export default async function updatePostController(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send({ status: 500 });
    }

    const findedPost = await Post.findOneAndUpdate({ id }, req.body, {
      new: true,
    });

    if (!findedPost) {
      return res.send({ status: 500 });
    }

    return res.send(findedPost);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}
