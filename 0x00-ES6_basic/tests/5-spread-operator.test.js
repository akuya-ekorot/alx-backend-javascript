import concatArrays from "../5-spread-operator";

test("spread operator", () => {
  expect(concatArrays([1, 2, 3], [4, 5, 6], "hello")).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    "h",
    "e",
    "l",
    "l",
    "o",
  ]);
});
