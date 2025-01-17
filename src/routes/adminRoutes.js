const express = require('express');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authenticate); // Protect all admin routes
router.use(authorizeAdmin); // Ensure only admins can access

// Example: Admin dashboard
router.get('/dashboard', (req, res) => {
    // Logic for fetching admin dashboard data
    res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

// Example: Get all forms (admin access)
router.get('/forms', (req, res) => {
    // Logic to fetch all forms for admin
    res.status(200).json({ message: 'All forms retrieved', forms: [] });
});

// Example: Delete a form (admin action)
router.delete('/forms/:id', (req, res) => {
    const { id } = req.params;
    // Logic to delete a form by ID
    res.status(200).json({ message: `Form ${id} deleted` });
});

module.exports = router;