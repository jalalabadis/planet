import mongoose from 'mongoose';
import connectDb from '../../../lib/mongoose';

connectDb();
  const treesclubSchemas = new mongoose.Schema({
    RequestDate: {
        type: String,
        required: true
    },
    Clientinfo: {
        type: String,
        required: true
    },
    Logo: {
        type: String,
        required: true
    },
    Propagules: {
        type: Number,
        required: true
    },
    Latitude: {
        type: Number,
        required: true
    },
    Longitude: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    Client: {
        type: String,
        required: true
    },
    Planted: {
        type: Number,
        required: true
    }
});

const TreesclubPath = mongoose.models.treesclub || mongoose.model("treesclub", treesclubSchemas);
export default async (req, res) => {
if(req.query.dburl){
    const newTreesclub = new TreesclubPath({
        "RequestDate": "1 Jun 2023",
        "Clientinfo": "Kyoto Protocol Part 807 (10000)",
        "Logo": "https://drive.google.com/file/d/1SkQGnnovfe5vLT5yIKEvht1UpGStOj1m/view?usp=sharing",
        "Propagules": 10000,
        "Latitude": -9555,
        "Longitude": 234324,
        "video": "https://drive.google.com/file/d/1WDqd_86NWgLwB8P8WYtJoACwtNsHAbfo/view?usp=drivesdk",
        "Client": "Kyoto Protocol",
        "Planted": 1024516
    });

    // Save the new document
    await newTreesclub.save();
    res.send("Setdb ");
}
else{
const AdminData = await TreesclubPath.find();
res.send(AdminData);
}
};