import Airport from '../7-airport';

describe('Airport', () => {
  test('should have a constructor that sets the name and code properties', () => {
    const airport = new Airport('JFK', 'NYC');

    expect(airport._name).toBe('JFK');
    expect(airport._code).toBe('NYC');
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Airport(1, 'NYC')).toThrow(TypeError);
  });

  test('should throw an error if code is not a string', () => {
    expect(() => new Airport('JFK', 1)).toThrow(TypeError);
  });

  test('should have a toString method', () => {
    const airport = new Airport('JFK', 'NYC');

    expect(typeof airport.toString).toBe('function');
    expect(airport.toString()).toBe('[object NYC]');
  });

  test('should be an instance of Airport', () => {
    const airport = new Airport('JFK', 'NYC');
    expect(airport).toBeInstanceOf(Airport);
  });
});
