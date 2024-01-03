import handleProfileSignup from "../3-all";

test("handle profile signup", () => {
  jest.spyOn(console, "log");
  handleProfileSignup();
});
