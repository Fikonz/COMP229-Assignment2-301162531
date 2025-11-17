import Qualification from "../models/qualification.model.js";

export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }
    res.json(qualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createQualification = async (req, res) => {
  try {
    const qualification = await Qualification.create(req.body);
    res.status(201).json(qualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }
    res.json(qualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteQualification = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Qualification not found" });
    }
    res.json({ message: "Qualification removed" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAllQualifications = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
