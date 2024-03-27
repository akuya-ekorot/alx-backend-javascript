import Building from '../5-building';

describe('Building', () => {
  test('cannot be instantiated', () => {
    expect(() => new Building(100)).toThrow(Error);
  });

  test('evacuationWarningMessage not implemented', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(100)).toThrow(Error);
  });

  test('constructor', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return 'test message';
      }
    }
    const testBuilding = new TestBuilding(100);
    expect(testBuilding._sqft).toBe(100);
  });

  test('sqft type error', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return 'test message';
      }
    }
    expect(() => new TestBuilding('100')).toThrow(TypeError);
  });
});
