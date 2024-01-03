import getResponseFromAPI from "../0-promise";

test("Instance of Promise", () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});
