import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

export default async function connectDatabase() {
  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000
  });
  console.log(`Connected to MongoDB: ${MONGO_URI}`);
}
