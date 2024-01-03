import signUpUser from "../4-user-promise";

test("sign up user", () => {
  expect(signUpUser("Akuya", "Ekorot")).resolves.toEqual(
    expect.objectContaining({
      firstName: "Akuya",
      lastName: "Ekorot",
    }),
  );
});
