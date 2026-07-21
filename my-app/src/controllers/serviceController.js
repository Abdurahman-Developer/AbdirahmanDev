import Service from "../models/Service.js";

export const createService = async (req, res) => {
  try {
    const { title, description, price, paymentType, features, duration } =
      req.body;
    const service = await Service.create({
      title,
      description,
      price,
      paymentType,
      features,
      duration,
    });
    res.status(200).json({
      message: "service created succesfully",
      service,
    });
  } catch (err) {
    console.error(err, "error for craeting service");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getService = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(201).json({ message: "service fetched suucessfully", services });
  } catch (err) {
    console.error(err, "error for getting service");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
