import returnHowManyArguments from "../4-rest-parameter";

test("rest parameter", () => {
  expect(returnHowManyArguments(1, 2, 3)).toBe(3);
  expect(returnHowManyArguments(1, 2, 3, 4)).toBe(4);
});
