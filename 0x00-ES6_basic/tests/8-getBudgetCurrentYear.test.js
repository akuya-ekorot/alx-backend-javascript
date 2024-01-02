import getBudgetForCurrentYear from "../8-getBudgetCurrentYear";

test("getBudgetForCurrentYear", () => {
  expect(getBudgetForCurrentYear(200000, 100000, 10)).toEqual({
    "income-2024": 200000,
    "gdp-2024": 100000,
    "capita-2024": 10,
  });
});
