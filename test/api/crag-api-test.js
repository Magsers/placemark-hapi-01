import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { db } from "../../src/models/db.js";

import { maggie, maggieCredentials, fairhead, testCrags } from "../fixtures.js";

suite("Crag API tests", () => {

  let user = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCredentials);
    await placemarkService.deleteAllCrags();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCredentials);
    fairhead.userid = user._id;
  });

  teardown(async () => {});

  test("create crag", async () => {
    const returnedCrag = await placemarkService.createCrag(fairhead);
    assert.isNotNull(returnedCrag);
    assertSubset(fairhead, returnedCrag);
  });

  test("delete a crag", async () => {
    const crag = await placemarkService.createCrag(fairhead);
    const response = await placemarkService.deleteCrag(crag._id);
    assert.equal(response.status, 204);
    try {
      const returnedCrag = await placemarkService.getCrag(crag.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Crag with this id", "Incorrect Response Message");
    }
  });

  test("create multiple crags", async () => {
    for (let i = 0; i < testCrags.length; i += 1) {
      testCrags[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createCrag(testCrags[i]);
    }
    let returnedLists = await placemarkService.getAllCrags();
    assert.equal(returnedLists.length, testCrags.length);
    await placemarkService.deleteAllCrags();
    returnedLists = await placemarkService.getAllCrags();
    assert.equal(returnedLists.length, 0);
  });

  test("remove non-existant crag", async () => {
    try {
      const response = await placemarkService.deleteCrag("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Crag with this id", "Incorrect Response Message");
    }
  });
});
