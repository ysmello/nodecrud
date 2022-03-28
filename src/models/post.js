import mongoose from '../database';

const PostSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true },
  tritle: { type: string, required: true },
  body: { type: string, required: true },
  tags: { type: array, required: true },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
