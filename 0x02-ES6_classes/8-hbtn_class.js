export default class Holberton {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }

    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } else if (hint === 'string') {
      return this._location;
    } else {
      return null;
    }
  }
}
