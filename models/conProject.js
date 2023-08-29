import { Schema, model, models } from "mongoose";

const ConProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username is required!"],
  },
  description: {
    type: String,
    required: [true, "Password is required!"],
  },
  tech: {
    type: [String],
    required: [true, "Don't forget Technologies"]
  },
  github: {
    type: String,
  },
  live: {
    type: String,
  },
  image: {
    type: String,
  },
  points: {
    type: [String],
  },
  ytId: {
    type: String,
  },
  
});

const ConProject = models.ConProject || model("ConProject", ConProjectSchema);

export default ConProject;
