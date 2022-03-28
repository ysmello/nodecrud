import mongoose from 'mongoose';

const connection = mongoose.connect(
  'mongodb+srv://root:root@cluster0.rjvpb.mongodb.net/challengnode?retryWrites=true&w=majority'
);

export default connection;
