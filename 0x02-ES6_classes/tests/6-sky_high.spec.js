import Building from '../5-building';
import SkyHighBuilding from '../6-sky_high';

describe('Sky High', () => {
  test('should be a subclass of Building', () => {
    expect(SkyHighBuilding.prototype).toBeInstanceOf(Building);
  });

  test('should have a constructor that sets the sqft and floors properties', () => {
    const skyHigh = new SkyHighBuilding(1000, 10);

    expect(skyHigh.sqft).toBe(1000);
    expect(skyHigh.floors).toBe(10);
  });

  test('should throw an error if floors is not a number', () => {
    expect(() => new SkyHighBuilding(1000, '10')).toThrow(TypeError);
  });

  test('should override the evacuationWarningMessage method', () => {
    const skyHigh = new SkyHighBuilding(1000, 10);
    expect(skyHigh.evacuationWarningMessage()).toBe(
      'Evacuate slowly the 10 floors!',
    );
  });
});
