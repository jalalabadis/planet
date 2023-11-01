import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  const filePath = path.resolve(process.cwd(), 'public/assets/images/custom/planet.png');
  const binaryImage = Buffer.from(req.body, 'base64');
  fs.writeFileSync(filePath, binaryImage);
  // Return the new image URL to the client
  const imageUrl = `/public/assets/images/custom/planet.png`;
  res.json({ success: true, imageUrl });
};
