import { Route } from "./route.js";

export const routeMongoStore = {
  async getAllRoutes() {
    const routes = await Route.find().populate("climber").populate("crag").lean();
    return routes;
  },

  async getRoutesByCrag(id) {
    const routes = await Route.find({ crag: id });
    return routes;
  },

  async getRouteById(id) {
    if (id) {
      const route = await Route.findOne({ _id: id }).lean();
      return route;
    }
    return null;
  },

  async addRoute(name, grade, height, description, lat, lng, climber, crag) {
    const newRoute = new Route({
      name,
      grade,
      height,
      description,
      lat,
      lng,
      climber: climber._id,
      crag: crag._id,
    });
    await newRoute.save();
    return newRoute;
  },

  async deleteRoute(id) {
    try {
      await Route.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllRoutes() {
    await Route.deleteMany({});
  },

  async updateRoute(updatedRoute) {
    const route = await Route.findOne({ _id: updatedRoute._id });
    route.name = updatedRoute.name;
    route.grade = updatedRoute.grade;
    route.height = updatedRoute.height;
    route.description = updatedRoute.description;
    // route.datedone = updatedRoute.datedone;
    await route.save();
  },

};