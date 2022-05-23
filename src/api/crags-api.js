import Boom from "@hapi/boom";
import { Crag } from "../models/mongo/crag.js";

export const cragsApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const crags = await Crag.find();
      return crags;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const crag = await Crag.findOne({ _id: request.params.id });
        if (!crag) {
          return Boom.notFound("No Crag with this id");
        }
        return crag;
      } catch (err) {
        return Boom.notFound("No Crag with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newCrag = new Crag(request.payload);
      const crag = await newCrag.save();
      if (crag) {
        return h.response(crag).code(201);
      }
      return Boom.badImplementation("error creating crag");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Crag.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Crag.deleteOne({ _id: request.params.id });
      if (response.deletedCount === 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};