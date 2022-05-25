import { userApi } from "./api/users-api.js";
import { routesApi } from "./api/routes-api.js";
import { cragsApi } from "./api/crags-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/routes", config: routesApi.findAll },
  { method: "GET", path: "/api/crags/{id}/routes", config: routesApi.findByCrag },
  { method: "POST", path: "/api/crags/{id}/routes", config: routesApi.addRoute },
  { method: "DELETE", path: "/api/routes", config: routesApi.deleteAll },

  { method: "GET", path: "/api/crags", config: cragsApi.find },
  { method: "GET", path: "/api/crags/{id}", config: cragsApi.findOne },
  { method: "POST", path: "/api/crags", config: cragsApi.create },
  { method: "DELETE", path: "/api/crags/{id}", config: cragsApi.deleteOne },
  { method: "DELETE", path: "/api/crags", config: cragsApi.deleteAll },
];