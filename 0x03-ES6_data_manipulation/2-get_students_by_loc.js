/**
 * returns an array of objects
 * @typedef {{id: number, firstName: string, location: string}} Student
 *
 * @param {Student[]} students
 * @param {string} location
 *
 * @returns {Student[]} studentsByLocation
 */
export default function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === location);
}
