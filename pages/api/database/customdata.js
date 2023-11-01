
import fs from 'fs';
import path from 'path';
const filePath = path.resolve(process.cwd(), 'src/custom/JSON/navData.json');

export default async (req, res)=>{
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
    res.send("update");
};