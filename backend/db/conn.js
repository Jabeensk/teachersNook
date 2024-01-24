import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function conn() {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error.message);
  }
}