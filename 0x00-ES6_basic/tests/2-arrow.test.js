import getNeighborhoodsList from "../2-arrow";
import { test, expect } from "@jest/globals";

test("works with arrow functions", () => {
  const neighborhoodsList = new getNeighborhoodsList();
  const res = neighborhoodsList.addNeighborhood("Dogpatch");

  expect(res).toEqual(["SOMA", "Union Square", "Dogpatch"]);
});
