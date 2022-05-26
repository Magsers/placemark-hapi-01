import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { Crag } from "../models/mongo/crag.js";
import { createToken } from "./jwt-utils.js";

export const cragApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try { 
        const crags = await db.cragStore.getAllCrags();
        return crags;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    // response: { schema: CragArraySpec, failAction: validationError },
    description: "Get all crags",
    notes: "Returns all crags",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const crag = await db.cragStore.getCragById(request.params.id);
        if (!crag) {
          return Boom.notFound("No Crag with this id");
        }
        return crag;
      } catch (err) {
        return Boom.notFound("No Crag with this id");
      }
    },
    tags: ["api"],
    description: "Find a Crag",
    notes: "Returns a crag",
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const crag = request.payload;
        const newCrag = await db.cragStore.addCrag(crag);
        if (newCrag) {
          return h.response(newCrag).code(201);
        }
        return Boom.badImplementation("error creating crag");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a Crag",
    notes: "Returns the newly created crag",
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const crag = await db.cragStore.getCragById(request.params.id);
        if (!crag) {
          return Boom.notFound("No Crag with this id");
        }
        await db.cragStore.deleteCragById(crag._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Crag with this id");
      }
    },
    tags: ["api"],
    description: "Delete a crag",
    // validate: { params: { id: IdSpec }, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.cragStore.deleteAllCrags();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all CragApi",
  },
} 