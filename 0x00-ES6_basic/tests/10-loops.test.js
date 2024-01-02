import appendToEachArrayValue from "../10-loops";

test("appendToEachArrayValue", () => {
  expect(appendToEachArrayValue(["hello", "world"], "hi-")).toEqual([
    "hi-hello",
    "hi-world",
  ]);
});
