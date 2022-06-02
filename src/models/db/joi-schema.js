import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

  export const UserCredentialsSpec = Joi.object()
    .keys({
      email: Joi.string().email().example("homer@simpson.com").required(),
      password: Joi.string().example("secret").required(),
    })
    .label("UserCredentials");
  
  export const UserSpec = UserCredentialsSpec.keys({
    firstName: Joi.string().example("Homer").regex(/^[A-Z][a-z]{2,}$/).required(),
    lastName: Joi.string().example("Simpson").regex(/^[A-Z][a-z]{2,}$/).required(),
  }).label("UserDetails");
  
  export const UserSpecPlus = UserSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("UserDetailsPlus");
  
  export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");
  
  export const RouteSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Animal"),
    grade: Joi.string().required().example("E1"),
    height: Joi.number().allow("").optional().example(25),
    description: Joi.string().allow("").optional().example("Spicy first few moves"),
    lat: Joi.number().allow("").optional().example("51.00"),
    lng: Joi.number().allow("").optional().example("-7.00"),
    climberid: IdSpec,
    cragid: IdSpec,
  })
  .label("Route");

  export const RouteSpecPlus = RouteSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("RoutePlus");

  export const RouteArraySpec = Joi.array().items(RouteSpecPlus).label("RouteArray");
  
  export const CragSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Murlough Bay"),
    approach: Joi.string().allow("").optional().example("Walk SW from carpark"),
    lat: Joi.number().allow("").optional().example("52.00"),
    lng: Joi.number().allow("").optional().example("-7.00"),
    img: Joi.string().allow("").optional().example("/images/crag.jpg"),
    userid: IdSpec,
    routes: RouteArraySpec,
  })
  .label("Crag");

  export const CragSpecPlus = CragSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("CragPlus");
  
  export const CragArraySpec = Joi.array().items(CragSpecPlus).label("CragArray");

  export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");
