import { Crag } from "./crag.js";

export const cragMongoStore = {
  async getAllCrags() {
    const crags = await Crag.find().lean();
    return crags;
  },

  async findById(id) {
    const crag = await Crag.findOne({ _id: id }).lean();
    return crag;
  },

  async findByTitle(title) {
    const crag = await Crag.findOne({
      title,
    });
    return crag;
  },

  async updateCrag(updatedCrag) {
    const crag = await cragStore.findOne({ _id: updatedCrag._id });
    crag.title = updatedCrag.title;
    crag.approach = updatedCrag.approach;
    crag.img = updatedCrag.img;
    await crag.save();
  },

};