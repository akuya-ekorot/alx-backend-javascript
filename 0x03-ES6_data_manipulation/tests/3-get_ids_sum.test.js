import getStudentIdsSum from '../3-get_ids_sum';

test('getStudentIdsSum returns the sum of all student ids', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  expect(getStudentIdsSum(students)).toEqual(8);
});
