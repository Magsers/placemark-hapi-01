import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { maggie, testCrags, testRoutes } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Placemark API tests", () => {
  setup(async () => {
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    await placemarkService.deleteAllUsers();
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
  });
  teardown(async () => {
    await placemarkService.deleteAllUsers();
  });

  test("create a route", async () => {
    const returnedCrag = await placemarkService.createCrag(testCrags[0]);
    await placemarkService.addRoute(returnedCrag._id, testRoutes[0]);
    const returnedRoutes = await placemarkService.getRoutes(returnedCrag._id);
    assert.equal(returnedRoutes.length, 1);
    assertSubset(returnedRoutes[0], testRoutes[0]);
  });
});