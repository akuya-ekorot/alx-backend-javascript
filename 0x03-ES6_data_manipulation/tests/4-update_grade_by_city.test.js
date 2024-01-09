import updateStudentGradeByCity from '../4-update_grade_by_city';

test("updateGradeByCity should update students' grades by city", () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  let grades = [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ];

  expect(updateStudentGradeByCity(students, 'San Francisco', grades)).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
  ]);

  grades = [{ studentId: 5, grade: 97 }];

  expect(updateStudentGradeByCity(students, 'San Francisco', grades)).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
  ]);
});
