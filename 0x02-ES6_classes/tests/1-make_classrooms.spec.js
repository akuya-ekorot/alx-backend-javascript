import initializeRooms from '../1-make_classrooms';

describe('initializeRooms', () => {
  test('creates 3 classrooms', () => {
    const rooms = initializeRooms();
    expect(rooms.length).toBe(3);
  });

  test('creates rooms in the correct order', () => {
    const rooms = initializeRooms();
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
