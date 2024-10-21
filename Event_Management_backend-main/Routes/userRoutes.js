const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// View cart
router.get('/cart', userController.viewCart);

// Add item to cart
router.post('/cart/add', userController.addToCart);

// Process payment
router.post('/payment', userController.processPayment);

// Check order status
router.get('/order_status', userController.checkOrderStatus);

// View guest list
router.get('/guest_list', userController.viewGuestList);

// Update guest list
router.put('/guest_list/update', userController.updateGuest);

// Delete guest from list
router.delete('/guest_list/delete', userController.deleteGuest);

module.exports = router;
