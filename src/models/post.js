import mongoose from '../database';
import uuid from 'node-uuid';

const PostSchema = new mongoose.Schema({
  _id: { type: String, default: uuid.v1 },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: Array, required: true },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
