import mongoose from 'mongoose';
import connectDb from '../../../lib/mongoose';

connectDb();
const treesclubSchemas = new mongoose.Schema({
  dates: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
    type: {
      type: String,
      required: true
    },
    geometry: {
      type: {
        type: String,
        required: true
      },
      coordinates: {
        type: [Number], // Change to an array of numbers
        required: true
      }
    },
    properties: {
      type: {
        id: String,
        _scope: String,
        allowDonations: Boolean,
        classification: String,
        countPlanted: Number,
        countTarget: Number,
        country: String,
        currency: String,
        fixedRates: Boolean,
        image: String,
        isApproved: Boolean,
        isFeatured: Boolean,
        isPublished: Boolean,
        isTopProject: Boolean,
        location: Boolean,
        minTreeCount: Number,
        name: String,
        paymentDefaults: Boolean,
        purpose: String,
        slug: String,
        taxDeductionCountries: [String],
        tpo: {
          image: Boolean,
          address: {
            zipCode: String,
            country: String,
            address: String,
            city: String
          },
          name: String,
          id: String,
          email: String,
          slug: String
        },
        treeCost: Number,
        unitCost: Number,
        unitType: String,
        unitsContributed: Boolean,
        unitsTargeted: Boolean,
        description: Boolean,
        options: [String],
        ecosystem: Boolean
      },
      required: true
    }
  });

const TreesclubPath = mongoose.models.treesclub || mongoose.model("treesclub", treesclubSchemas);
export default async (req, res) => {
    try{
const AdminData = await TreesclubPath.find();
res.send(AdminData);
}
catch(err){
    res.send(err)
}
};