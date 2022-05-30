import { db } from "../models/db.js";
import { CragSpec } from "../models/db/joi-schema.js";


export const cragController = {
  index: {
    handler: async function (request, h) {
      const crag = await db.cragStore.getCragById(request.params.id);
      return h.view("Crag", { title: "Crag", crag: crag });
    },
  },

  addCrag: {
    validate: {
      payload: CragSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Add Crag error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newCrag = {
        userid: loggedInUser._id,
        title: request.payload.title,
        lat: Number(request.payload.lat),
        lng: Number(request.payload.lng),
        approach: request.payload.approach,
      };
      await db.cragStore.addCrag(newCrag);
      return h.redirect("/dashboard");
    },
  },

  deleteCrag: {
    handler: async function (request, h) {
    const crag = await db.cragStore.getCragById(request.params.id);
    await db.cragStore.deleteCragById(crag._id);
    return h.redirect("/dashboard");
    },
  },

  showEditCrag: {
    handler: async function (request, h) {
    const loggedInUser = request.auth.credentials;
    const crag = await db.cragStore.getCragById(request.params.id);
      const viewData = {
          title: "Edit Crag",
          user: loggedInUser,
          crag: crag,
        };
        return h.view("edit-crag", viewData);
      },
    },
  
  updateCrag: {
    handler: async function (request, h) {
    const loggedInUser = request.auth.credentials;      
    const crag = await db.cragStore.getCragById(request.params.id);
    const updatedCrag = {
      _id: crag._id,
      title: request.payload.title,
      lat: Number(request.payload.lat),
      lng: Number(request.payload.lng),
      approach: request.payload.approach,
      // userid: loggedInUser._id,
    };
    await db.cragStore.updateCrag(updatedCrag);
    return h.redirect(`/dashboard/${loggedInUser._id}`);
    },
  },


};