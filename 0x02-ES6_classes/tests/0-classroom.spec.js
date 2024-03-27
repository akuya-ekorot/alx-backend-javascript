import ClassRoom from '../0-classroom';

test('ClassRoom class', () => {
  const classRoom = new ClassRoom(10);
  expect(classRoom._maxStudentsSize).toBe(10);
});
