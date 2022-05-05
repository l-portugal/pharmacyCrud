const { Schema, model } = require('mongoose');

const PharmacySchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    // unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: String,
  email: String,
  _24hs: Boolean,
  location: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  URL_img: [{ type: String }], 
}, {
  timestamps: true
});

module.exports = model('Pharmacy', PharmacySchema);