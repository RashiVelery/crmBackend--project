const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create({
            name: req.body.name,
            contactInfo: req.body.contactInfo,
            owner: req.user.id
        });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: "Customer deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};