import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { createToken } from "./jwt-utils.js";
import { IdSpec, RouteSpec, RouteSpecPlus, RouteArraySpec } from "../models/db/joi-schema.js";
import { validationError } from "../logger.js";

export const routesApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
     try {
      const routes = await db.routeStore.getAllRoutes();
      return routes;
     } catch (err) {
      return Boom.serverUnavailable("Database Error");
    }
  },
  // tags: ["api"],
  // response: { schema: RouteArraySpec, failAction: validationError },
  // description: "Get all routeApi",
  // notes: "Returns all routeApi",
},

findOne: {
  auth: {
    strategy: "jwt",
  },
  async handler(request) {
    try {
      const route = await db.routeStore.getRouteById(request.params.id);
      if (!route) {
        return Boom.notFound("No route with this id");
      }
      return route;
    } catch (err) {
      return Boom.serverUnavailable("No route with this id");
    }
  },
  // tags: ["api"],
  // description: "Find a Route",
  // notes: "Returns a route",
  // validate: { params: { id: IdSpec }, failAction: validationError },
  // response: { schema: RouteSpecPlus, failAction: validationError },
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
      try {
        const route = await db.routeStore.addRoute(request.params.id, request.payload);
        if (route) {
          return h.response(route).code(201);
        }
        return Boom.badImplementation("error creating route");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    // tags: ["api"],
    // description: "Create a route",
    // notes: "Returns the newly created route",
    // validate: { payload: RouteSpec },
    // response: { schema: RouteSpecPlus, failAction: validationError },
  },

  // addRoute: {
  //   auth: {
  //     strategy: "jwt",
  //   },
  //   handler: async function (request, h) {
  //     const crag = await db.cragStore.getCragById(request.params.id);
  //     if (!crag) {
  //       return Boom.notFound("No Crag with this id");
  //     }
  //     const route = await db.routeStore.addRoute(
  //       request.payload.name,
  //       request.payload.grade,
  //       request.payload.height,
  //       request.payload.description,
  //       request.payload.lat,
  //       request.payload.lng,
  //       request.auth.credentials,
  //       crag
  //     );
  //     return route;
  //   },
  //   // tags: ["api"],
  //   // description: "Create a route",
  //   // notes: "Returns the newly created route",
  // },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.routeStore.deleteAll();
        return { success: true };
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all routeApi",
},

deleteOne: {
  auth: {
    strategy: "jwt",
  },
  handler: async function (request, h) {
    try {
      const route = await db.routeStore.getRouteById(request.params.id);
      if (!route) {
        return Boom.notFound("No Route with this id");
      }
      await db.routeStore.deleteRoute(route._id);
      return h.response().code(204);
    } catch (err) {
      return Boom.serverUnavailable("No Route with this id");
    }
   },
  // tags: ["api"],
  // description: "Delete a route",
  // validate: { params: { id: IdSpec }, failAction: validationError },
 },
};
