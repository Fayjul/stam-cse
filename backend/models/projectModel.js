import mongoose from 'mongoose';

const pojectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    batch: { type: Number, required: true },
    course: { type: String, required: true },
    description: { type: String, required: true },
    video: { type: String, required: true },
    github: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', pojectSchema);
export default Project;
