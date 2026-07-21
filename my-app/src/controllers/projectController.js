import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { title, description, techstack, image, link } = req.body;
    const project = await Project.create({
      title,
      description,
      techstack,
      image,
      link,
    });
    res.status(200).json({
      message: "project created successfully",
      project,
    });
  } catch (err) {
    console.error(err, "error for creating project");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "projects fetched successfully",
      projects,
    });
  } catch (err) {
    console.error(err, "error for fetching project");
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
