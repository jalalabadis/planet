// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://bing_backlink:yfdBAD1ShVJXFcp5@cluster0.jiylumr.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
