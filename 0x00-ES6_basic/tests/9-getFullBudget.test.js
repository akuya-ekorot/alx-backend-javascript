import getFullBudgetObject from "../9-getFullBudget";

test("getFullBudgetObject", () => {
  const fullBudget = getFullBudgetObject(200000, 100000, 10);

  expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe("$200000");
  expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe("200000 euros");
});
