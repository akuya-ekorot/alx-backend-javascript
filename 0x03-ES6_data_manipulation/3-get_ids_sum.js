/**
 * return the sum of all student ids
 * @typedef {{id: number, firstName: string, location: string}} Student
 *
 * @param {Student[]} students
 *
 * @returns {number} sum
 */
export default function getStudentIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
