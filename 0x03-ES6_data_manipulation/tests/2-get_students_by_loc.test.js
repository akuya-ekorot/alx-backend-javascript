import getStudentsByLocation from '../2-get_students_by_loc';

test('getStudentsByLocation returns an array of objects filtered by location', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  expect(getStudentsByLocation(students, 'San Francisco')).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ]);
});
