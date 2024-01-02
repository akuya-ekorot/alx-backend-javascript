import getBudgetObject from "../7-getBudgetObject";

test("getBudgetObject", () => {
  expect(getBudgetObject(200000, 100000, 10)).toEqual({
    income: 200000,
    gdp: 100000,
    capita: 10,
  });
});
