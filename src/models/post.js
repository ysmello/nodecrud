import mongoose from '../database';

const PostSchema = new mongoose.Schema({
  id: { type: mongoose.Types.ObjectId },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: Array, required: true },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
