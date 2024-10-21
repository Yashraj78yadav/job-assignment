const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Main page for vendor
router.get('/main', vendorController.getMainPage);

// Add a new item
router.post('/add_item', vendorController.addItem);

// Delete an item
router.delete('/delete_item/:itemId', vendorController.deleteItem);

// View all products
router.get('/view_products', vendorController.viewProducts);

// Handle transactions
router.post('/transaction', vendorController.handleTransaction);

module.exports = router;
