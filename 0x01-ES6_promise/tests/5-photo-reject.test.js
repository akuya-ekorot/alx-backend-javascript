import uploadPhoto from "../5-photo-reject";

test("Promise.reject", () => {
  expect.assertions(1);
  return uploadPhoto("notAPhoto.jpg").catch((error) =>
    expect(error).toEqual(Error("notAPhoto.jpg cannot be processed")),
  );
});
