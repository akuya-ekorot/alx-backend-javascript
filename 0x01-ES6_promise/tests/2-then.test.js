import handleResponseFromAPI from "../2-then";

test("logs on resolve", () => {
  const promise = Promise.resolve();
  jest.spyOn(console, "log");

  handleResponseFromAPI(promise);
});
