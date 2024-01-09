/**
 * returns an array of ids from a list of objects that have an id property
 * @param {*} arr
 *
 * @returns {Array<number>} ids
 */
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((student) => student.id).filter((id) => !Number.isNaN(id));
}
