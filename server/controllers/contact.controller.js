import Contact from "../models/contact.model.js";

// GET /api/contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/contacts/:id
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// POST /api/contacts
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/contacts/:id
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/contacts/:id
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact removed" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/contacts
export const deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
