import { db } from "../models/db.js";
import { RouteSpec } from "../models/db/joi-schema.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const crags = await db.cragStore.getAllCrags();
      return h.view("Dashboard", { title: "Dashboard", crags: crags });
    },
  },
  report: {
    handler: async function (request, h) {
      const routes = await db.routeStore.getAllRoutes();
      return h.view("Report", {
        title: "Routes to Date",
        routes: routes,
      });
    },
  },
  addRoute: {
    validate: {
      payload: RouteSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("crag-view", { title: "Add Route error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCrag = request.payload.crag;
        const crag = await db.cragStore.findByTitle(rawCrag);
        await db.routeStore.addRoute(request.payload.name, request.payload.grade, request.payload.height,request.payload.firstascent,request.payload.description,request.payload.lat,request.payload.lng,loggedInUser._id, crag._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};