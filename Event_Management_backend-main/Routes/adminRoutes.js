const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

// Admin maintenance menu
router.get('/maintenance', adminController.getMaintenanceMenu);

// Add or update memberships
router.post('/membership', adminController.addOrUpdateMembership);

// Add or update user
router.post('/user', adminController.addOrUpdateUser);

// Manage vendors
router.get('/vendors', adminController.manageVendors);

module.exports = router;
