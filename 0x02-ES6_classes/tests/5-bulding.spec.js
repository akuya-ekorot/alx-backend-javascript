import Building from '../5-building';

describe('Building', () => {
  test('constructor', () => {
    const building = new Building(100);
    expect(building._sqft).toBe(100);
  });

  test('sqft type error', () => {
    expect(() => new Building('100')).toThrow(TypeError);
  });

  test('evacuationWarningMessage not implemented', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(100)).toThrow(Error);
  });

  test('extending Building', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return 'test message';
      }
    }
    const testBuilding = new TestBuilding(100);
    expect(testBuilding._sqft).toBe(100);
  });
});
