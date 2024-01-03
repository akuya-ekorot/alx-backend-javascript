import getFullResponseFromAPI from "../1-promise";

test("test for true", () => {
  const response = getFullResponseFromAPI(true);
  expect(response).resolves.toEqual({ status: 200, body: "Success" });
});

test("test for false", () => {
  const response = getFullResponseFromAPI(false);
  expect(response).rejects.toEqual(
    new Error("The fake API is not working currently"),
  );
});
