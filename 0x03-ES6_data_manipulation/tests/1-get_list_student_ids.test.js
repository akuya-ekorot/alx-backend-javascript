import getListStudentIds from '../1-get_list_student_ids';

test('getListStudentIds returns an array of ids from a list of objects', () => {
  expect(
    getListStudentIds([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]),
  ).toEqual([1, 2, 5]);
});

test('getListStudentIds returns an empty array when an array is not passed', () => {
  expect(
    getListStudentIds({
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    }),
  ).toEqual([]);
});
