import Pricing from '../4-pricing';
import Currency from '../3-currency';

describe('Pricing', () => {
  test('constructor', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing._amount).toBe(100);
    expect(pricing._currency).toBe(currency);
  });

  test('price type error', () => {
    const currency = new Currency('USD', 'United States Dollar');
    expect(() => new Pricing('100', currency)).toThrow(TypeError);
  });

  test('currency type error', () => {
    expect(() => new Pricing(100, 'USD')).toThrow(TypeError);
  });

  test('price getter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing.amount).toBe(100);
  });

  test('price setter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing.amount).toBe(100);

    pricing.amount = 150;
    expect(pricing.amount).toBe(150);

    expect(() => {
      pricing.amount = '100';
    }).toThrow(TypeError);
  });

  test('currency getter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing.currency).toBe(currency);
  });

  test('currency setter', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing.currency).toBe(currency);

    const newCurrency = new Currency('EUR', 'Euro');
    pricing.currency = newCurrency;
    expect(pricing.currency).toBe(newCurrency);

    expect(() => {
      pricing.currency = 'USD';
    }).toThrow(TypeError);
  });

  test('displayFullPrice', () => {
    const currency = new Currency('USD', 'United States Dollar');
    const pricing = new Pricing(100, currency);

    expect(pricing.displayFullPrice()).toBe('100 United States Dollar (USD)');
  });

  test('convertPrice', () => {
    expect(Pricing.convertPrice(100, 0.8)).toBe(80);
  });

  test('convertPrice amount type error', () => {
    expect(() => Pricing.convertPrice('100', 0.8)).toThrow(TypeError);
  });

  test('convertPrice conversion rate type error', () => {
    expect(() => Pricing.convertPrice(100, '0.8')).toThrow(TypeError);
  });
});
