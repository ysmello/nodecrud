import mongoose from 'mongoose';

mongoose.connect(`${process.env.URI}`);

export default mongoose;
