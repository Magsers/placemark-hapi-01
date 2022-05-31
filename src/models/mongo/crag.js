import Mongoose from "mongoose";

const { Schema } = Mongoose;

const cragSchema = Schema({
  title: String,
  approach: String,
  lat: String,
  lng: String,
  img: String
});

export const Crag = Mongoose.model("Crag", cragSchema);