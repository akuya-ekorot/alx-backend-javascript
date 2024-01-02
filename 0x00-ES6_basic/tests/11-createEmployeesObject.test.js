import createEmployeesObject from "../11-createEmployeesObject";

test("createEmployeesObject", () => {
  expect(createEmployeesObject("Software", ["Bob", "Sally", "Sam"])).toEqual({
    Software: ["Bob", "Sally", "Sam"],
  });
});
