import Holberton from '../8-hbtn_class';

describe('Holberton', () => {
  test('constructor', () => {
    const hbtn = new Holberton(10, 'San Francisco');

    expect(hbtn._size).toBe(10);
    expect(hbtn._location).toBe('San Francisco');
  });

  test('should throw an error if size is not a number', () => {
    expect(() => new Holberton('10', 'San Francisco')).toThrow(TypeError);
  });

  test('should throw an error if location is not a string', () => {
    expect(() => new Holberton(10, 1)).toThrow(TypeError);
  });

  test('should return the size when coerced to a number', () => {
    const hbtn = new Holberton(10, 'San Francisco');
    expect(+hbtn).toBe(10);
    expect(Number(hbtn)).toBe(10);
  });

  test('should return the location when coerced to a string', () => {
    const hbtn = new Holberton(10, 'San Francisco');
    expect(`${hbtn}`).toBe('San Francisco');
    expect(String(hbtn)).toBe('San Francisco');
  });
});
