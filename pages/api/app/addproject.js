import mongoose from 'mongoose';

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
  const newTreesclub = new TreesclubPath({
    dates: req.body.dates,
    video: req.body.video,
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [req.body.Latitude, req.body.Longitude]
    },
    properties: {
      id: "proj_3cXBgeoedy3kuAtzsVC9cqy7",
      _scope: "map",
      allowDonations: false,
      classification: "large-scale-planting",
      countPlanted: req.body.Planted,
      countTarget: req.body.Propagules,
      country: "KE",
      currency: "BDT",
      fixedRates: null,
      image: req.body.logo,
      name: req.body.clientTitle,
      paymentDefaults: null,
      purpose: "trees",
      slug: "nakuru-bomet",
      tpo: {
        image: null,
        address: {
          zipCode: "20406",
          country: "KE",
          address: "717",
          city: "SOTIK"
        },
        name: req.body.Client,
        id: "tpo_JVEfP5fXjNsnzgNaSr1e6Tqp",
        email: "betkiprotich@gmail.com",
        slug: "youth-for-change-1"
      },
      treeCost: 341.09,
      unitCost: 341.09,
      unitType: "tree",
    }
  });

  try {
    // Save the new document
    await newTreesclub.save();
    res.send("Setdb");
  } catch (error) {
    console.error('Error saving to MongoDB:', error.message);
    res.status(500).send("Failed to save to MongoDB");
  }
};
