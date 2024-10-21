const User = require('../models/User');
const Vendor = require('../models/Vendor');

// Admin maintenance menu
exports.getMaintenanceMenu = (req, res) => {
  res.send('Admin Maintenance Menu');
};

// Add or update memberships
exports.addOrUpdateMembership = async (req, res) => {
  const { vendorId, membershipDetails } = req.body;
  try {
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    vendor.membership = membershipDetails;
    await vendor.save();
    res.status(200).json({ message: 'Membership updated successfully', vendor });
  } catch (error) {
    res.status(500).json({ message: 'Error updating membership', error });
  }
};

// Add or update users
exports.addOrUpdateUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      existingUser.password = password;
      existingUser.role = role;
      await existingUser.save();
      return res.status(200).json({ message: 'User updated successfully', user: existingUser });
    }
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error adding/updating user', error });
  }
};

// Manage vendors
exports.manageVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json({ vendors });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving vendors', error });
  }
};
