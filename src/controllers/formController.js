const { Form } = require('../models');

// Save form data
const saveFormData = async (req, res) => {
    try {
        const { step1_data, step2_data, step3_data } = req.body;

        const newForm = await Form.create({
            step1_data,
            step2_data,
            step3_data,
        });

        res.status(201).json({ message: 'Form saved successfully', data: newForm });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving form data', error });
    }
};

// Get all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await Form.findAll();
        res.status(200).json({ data: forms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching forms', error });
    }
};

module.exports = {
    saveFormData,
    getAllForms,
};
