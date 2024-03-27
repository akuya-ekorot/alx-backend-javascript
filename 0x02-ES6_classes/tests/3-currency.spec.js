import Currency from '../3-currency';

describe('Currency', () => {
  test('constructor', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency._code).toBe('USD');
    expect(currency._name).toBe('United States Dollar');
  });

  test('code type error', () => {
    expect(() => new Currency(24, 'United States Dollar')).toThrow(TypeError);
  });

  test('name type error', () => {
    expect(() => new Currency('USD', 24)).toThrow(TypeError);
  });

  test('code getter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.code).toBe('USD');
  });

  test('code setter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.code).toBe('USD');

    currency.code = 'EUR';
    expect(currency.code).toBe('EUR');

    expect(() => {
      currency.code = 24;
    }).toThrow(TypeError);
  });

  test('name getter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.name).toBe('United States Dollar');
  });

  test('name setter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.name).toBe('United States Dollar');

    currency.name = 'Euro';
    expect(currency.name).toBe('Euro');

    expect(() => {
      currency.name = 24;
    }).toThrow(TypeError);
  });

  test('displayFullCurrency', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(currency.displayFullCurrency()).toBe('United States Dollar (USD)');
  });
});
