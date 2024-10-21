const Vendor = require('../models/Vendor');
const Item = require('../models/Item');

// Display main vendor page
exports.getMainPage = async (req, res) => {
  res.send('Vendor Main Page');
};

// Add a new item
exports.addItem = async (req, res) => {
  const { name, vendorId } = req.body;
  try {
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    const newItem = new Item({ name, vendor: vendor._id });
    await newItem.save();
    vendor.items.push(newItem._id);
    await vendor.save();
    res.status(201).json({ message: 'Item added successfully', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await Item.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};

// View products
exports.viewProducts = async (req, res) => {
  try {
    const items = await Item.find().populate('vendor');
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
};

// Handle transactions
exports.handleTransaction = async (req, res) => {
  res.send('Transaction handling logic goes here');
};
