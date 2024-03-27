import listOfStudents from '../9-hoisting';

describe('listOfStudents', () => {
  test('should be an array', () => {
    expect(Array.isArray(listOfStudents)).toBe(true);
    expect(listOfStudents).toHaveLength(5);
  });

  test('should print list of students', () => {
    console.log(listOfStudents);
  });
});
