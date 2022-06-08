import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import Cookie from "@hapi/cookie";
import Handlebars from "handlebars";
import HapiSwagger from "hapi-swagger";

// import AuthCookie  from "@hapi/cookie";
// import Bell from "@hapi/bell";
import dotenv from "dotenv";
import Joi from "joi";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "hapi-auth-jwt2";
import { accountsController } from "./controllers/accounts-controller.js";
import { webRoutes } from "./web-routes.js";
import { db } from "./models/db.js";
import { validate } from "./api/jwt-utils.js";
import { apiRoutes } from "./api-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  info: {
    title: "Placemark API",
    version: "0.2"
  },
  securityDefinitions: {
    jwt: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  security: [{ jwt: [] }]
};

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  // process.exit(1);
}

async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: { cors: true },
  });

 await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  await server.register(Inert);
  await server.register(Vision);
  await server.register(Cookie);
  await server.register(jwt);
  server.validator(Joi);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "./pages",
    layoutPath: "./pages",
    partialsPath: "./pages/components",
    layout: true,
    isCached: false,
  });

server.auth.strategy("session", "cookie", {
    cookie: {
      name: process.env.cookie_name,
      password: process.env.cookie_password,
      isSecure: false,
    },
    redirectTo: "/",
    validateFunc: accountsController.validate,
  });

  // OAuth

  // const bellAuthOptions = {
  //   provider: "github",
  //   password: "github-encryption-password-secure", // String used to encrypt cookie
  //   // used during authorisation steps only
  //   clientId: "d07fc3c79edb62941679",          // *** Replace with app Client Id ****
  //   clientSecret: "a05dbef0fa8f625ee4a098c9c88d8aaba7c5767c",  // *** Replace with  app Client Secret ***
  //   isSecure: false        // Should be 'true' in production software (requires HTTPS)
  // };
  
  // server.auth.strategy("github-oauth", "bell", bellAuthOptions);

  server.auth.default("session");

  server.auth.strategy("jwt", "jwt", {
    key: process.env.cookie_password,
    validate: validate,
    verifyOptions: { algorithms: ["HS256"] },
  });

  db.init("mongo");

  server.route(webRoutes);
  server.route(apiRoutes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

await init();
