const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

// Save form data
router.post('/', async (req, res) => {
    try {
        const { step1, step2, step3 } = req.body;

        // Create a new record in the database
        const form = await Forms.create({
            step1_data: step1,
            step2_data: step2,
            step3_data: step3,
        });

        res.status(201).json(form);
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Failed to save form data' });
    }
});

module.exports = router;
