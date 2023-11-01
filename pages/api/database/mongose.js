import mongoose from 'mongoose';
import connectDb from '../../../lib/mongoose';

connectDb();
  const adminDataSchemas = new mongoose.Schema({
    taskType: {
        type: String,
        required: true
    },
    taskLimit: {
        type: Number,
        required: true
    },
    fbPostID: {
        type: [String],
        required: true
    },
    googleKey: {
        type: [
            {
                key: String,
                Image: String
            }],
        required: true
    },
    Origin: {
        type: [String],
        required: true
    }
});

const AdminDataPath = mongoose.models.admindata || mongoose.model("admindata", adminDataSchemas);
const yut = [];
export default async (req, res) => {
if(req.query.dburl){
    yut.push(req.query.dburl);
    res.send("Setdb "+yut);
}
else{
const AdminData = await AdminDataPath.find();
res.send(AdminData);
}
};