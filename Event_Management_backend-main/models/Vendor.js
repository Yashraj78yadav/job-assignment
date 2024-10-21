const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

module.exports = mongoose.model('Vendor', VendorSchema);
