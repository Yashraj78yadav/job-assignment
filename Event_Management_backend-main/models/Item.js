const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  status: { type: String, enum: ['available', 'unavailable'], default: 'available' },
});

module.exports = mongoose.model('Item', ItemSchema);
