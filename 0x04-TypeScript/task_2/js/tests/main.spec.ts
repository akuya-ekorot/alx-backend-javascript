import {
  createEmployee,
  Director,
  Teacher,
  isDirector,
  executeWork,
} from '../main';

describe('createEmployee', () => {
  test('should return Director', () => {
    expect(createEmployee(1000)).toBeInstanceOf(Director);
  });

  test('should return Director', () => {
    expect(createEmployee('$500')).toBeInstanceOf(Director);
  });

  test('should return Teacher', () => {
    expect(createEmployee(100)).toBeInstanceOf(Teacher);
  });
});

describe('isDirector', () => {
  test('should return true', () => {
    expect(isDirector(createEmployee(1000))).toBe(true);
  });

  test('should return false', () => {
    expect(isDirector(createEmployee(300))).toBe(false);
  });
});

describe('executeWork', () => {
  test('should return Getting to director tasks', () => {
    expect(executeWork(createEmployee(1000))).toBe('Getting to director tasks');
  });

  test('should return Getting to work', () => {
    expect(executeWork(createEmployee(300))).toBe('Getting to work');
  });
});
