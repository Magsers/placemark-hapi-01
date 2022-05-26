import { db } from "../models/db.js";

export const cragController = {
  index: {
    handler: async function (request, h) {
      const crag = await db.cragStore.getCragById(request.params.id);
      return h.view("Crag", { title: "Crag", crag: crag });
    },
  },

};