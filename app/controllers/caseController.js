const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCases = async (req, res) => {
  try {
    const cases = await Case.find().populate("customer assignedTo");
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCase = async (req, res) => {
  try {
    const updated = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};