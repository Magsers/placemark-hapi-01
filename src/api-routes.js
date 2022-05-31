import { userApi } from "./api/users-api.js";
import { routesApi } from "./api/routes-api.js";
import { cragApi } from "./api/crags-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/routes", config: routesApi.findAll },
  { method: "GET", path: "/api/routes/{id}", config: routesApi.findOne },
  { method: "GET", path: "/api/crags/{id}/routes", config: routesApi.findByCrag },
  { method: "POST", path: "/api/crags/{id}/routes", config: routesApi.addRoute },
  { method: "DELETE", path: "/api/routes/{id}", config: routesApi.deleteOne },
  { method: "DELETE", path: "/api/routes", config: routesApi.deleteAll },

  { method: "GET", path: "/api/crags", config: cragApi.find },
  { method: "GET", path: "/api/crags/{id}", config: cragApi.findOne },
  { method: "POST", path: "/api/crags", config: cragApi.create },
  { method: "DELETE", path: "/api/crags/{id}", config: cragApi.deleteOne },
  { method: "DELETE", path: "/api/crags", config: cragApi.deleteAll },

  // { method: "POST", path: "/api/crags/{id}/uploadimage", config: cragApi.uploadImage },
];