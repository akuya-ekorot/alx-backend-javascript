export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw TypeError('Name and code must be strings');
    }

    this._name = name;
    this._code = code;
  }

  // string representation of the airport
  toString() {
    return `[object ${this._code}]`;
  }
}
