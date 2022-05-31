import Mongoose from "mongoose";

const { Schema } = Mongoose;

const imageSchema = Schema({
  title: String,
  crag: {
    type: Schema.Types.ObjectId,
    ref: "Crag",
  },
});

export const Image = Mongoose.model("Image", imageSchema);