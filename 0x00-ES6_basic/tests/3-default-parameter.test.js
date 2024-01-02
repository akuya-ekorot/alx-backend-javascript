import getSumOfHoods from "../3-default-prameter";
import { test, expect } from "@jest/globals";

test("getSumOfHoods", () => {
  expect(getSumOfHoods(34)).toBe(142);
  expect(getSumOfHoods(34, 3)).toBe(56);
  expect(getSumOfHoods(34, 3, 4)).toBe(41);
});
