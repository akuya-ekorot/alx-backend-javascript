export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw Error('Building is an abstract class and cannot be instantiated');
    }

    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
