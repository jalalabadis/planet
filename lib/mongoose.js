// db.js
import mongoose from 'mongoose';
import admin from './firebaseadmin';

const connectDB = async () => {
  try {
    const fdb = admin.database();
    const ref = fdb.ref('Admin/Database');
    const snapshot = await ref.once('value');
    const data = await snapshot.val();

    const db = await mongoose.connect(data.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    throw error; // Rethrow the error to propagate it to the calling function
  }
};

export default connectDB;
