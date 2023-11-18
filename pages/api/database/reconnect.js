// pages/api/reconnect.js
import connectDB from "../../../lib/mongoose";

export default async function handler(req, res) {
  try {
    console.log('Attempting MongoDB reconnection...');
    
    // Trigger the MongoDB reconnection
    await connectDB();
    
    console.log('MongoDB reconnected successfully');
    
    res.status(200).json({ success: true, message: 'MongoDB reconnected successfully' });
  } catch (error) {
    console.error('Error reconnecting to MongoDB:', error.message);
    res.status(500).json({ success: false, message: 'Failed to reconnect to MongoDB' });
  }
}
