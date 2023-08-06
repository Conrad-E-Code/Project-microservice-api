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
  
});

const ConProject = models.ConProject || model("ConProject", ConProjectSchema);

export default ConProject;

// const proj = {
//   name: "Placomatic Mobile App",
//   description: "A mobile app for the Placomatic project",
//   tech: ["React Native", "Expo", "Firebase"],
//   github: "",
//   live: "https://expo.io/@conradetherington/placomatic",
//   image: "https://i.imgur.com/0QZQY5m.png",
// };
