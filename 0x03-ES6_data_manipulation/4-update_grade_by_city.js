/**
 * Returns an array of students for a specific city with their new grades
 * @typedef {{id: number, firstName: string, location: string}} Student
 * @typedef {{studentId: number, grade: number}} Grade
 *
 * @param {Student[]} students
 * @param {string} city
 * @param {Grade[]} newGrades
 *
 * @returns {(Student & {grade: number | 'N/A'})[]} gradedStudents
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade:
        newGrades.find((grade) => grade.studentId === student.id)?.grade ??
        'N/A',
    }));
}
