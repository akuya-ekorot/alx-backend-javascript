import { taskFirst, taskNext } from "../0-constants";
import { test, expect } from "@jest/globals";

test("works with constants", () => {
  expect(taskFirst()).toBe("I prefer const when I can.");
  expect(taskNext()).toBe("But sometimes let is okay");
});
