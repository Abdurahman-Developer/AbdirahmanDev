import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  techStack: { type: [String], default: [] },
  image: { type: String },
  link: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
