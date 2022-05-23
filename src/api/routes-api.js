import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const routesApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const routes = db.routeStore.getAllRoutes();
      return routes;
    },
  },
  findByCrag: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const routes = await db.routeStore.getRoutesByCrag(request.params.id);
      return routes;
    },
  },

  addRoute: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const crag = await db.cragStore.findById(request.params.id);
      if (!crag) {
        return Boom.notFound("No Crag with this id");
      }
      const route = await db.routeStore.addRoute(
        request.payload.name,
        request.payload.grade,
        request.payload.height,
        request.payload.firstascent,
        request.payload.description,
        request.payload.lat,
        request.payload.lng,
        request.auth.credentials,
        crag
      );
      return route;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.routeStore.deleteAll();
      return { success: true };
    },
  },
};