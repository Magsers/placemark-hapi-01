import { userMongoStore } from "./mongo/user-mongo-store.js";
import { routeMongoStore } from "./mongo/route-mongo-store.js";
import { cragMongoStore } from "./mongo/crag-mongo-store.js";
import { imageStore } from "./mongo/image-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  routeStore:null,
  cragStore:null,
  imageStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.routeStore = routeMongoStore;
        this.cragStore = cragMongoStore;
        this.imageStore = imageStore;
        connectMongo();
        break;
      default:
    }
  },
};