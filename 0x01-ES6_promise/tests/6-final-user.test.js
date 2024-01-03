import handleProfileSignup from "../6-final-user";

test("handle profile signup", () => {
  jest.spyOn(console, "log");
  console.log(handleProfileSignup("Akuya", "Ekorot", "akuya-ekorot.jpg"));
});
