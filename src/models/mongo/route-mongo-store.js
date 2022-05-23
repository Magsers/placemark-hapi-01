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

  async addRoute(name, grade, height, firstascent, description, lat, lng, climber, crag) {
    const newRoute = new Route({
      name: name,
      grade: grade,
      height: height,
      firstascent: firstascent,
      description: description,
      lat,
      lng,
      climber: climber._id,
      crag: crag._id,
    });
    await newRoute.save();
    return newRoute;
  },

  async deleteAll() {
    await Route.deleteMany({});
  },
};