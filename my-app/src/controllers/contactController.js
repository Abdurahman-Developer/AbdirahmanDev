import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, location, subject, message } = req.body;

    if (!name || !email || !subject || !message || !phone) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
      location,
      subject,
      message,
    });
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (err) {
    console.error(err, "error for craeting contact");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllMessage = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err, "error for craeting contact");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
