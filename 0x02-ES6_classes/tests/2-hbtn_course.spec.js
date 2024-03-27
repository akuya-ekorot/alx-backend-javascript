import HolbertonCourse from '../2-hbtn_course';

describe('HolbertonCourse', () => {
  test('constructor', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course._name).toBe('UCSF');
    expect(course._length).toBe(24);
    expect(course._students).toEqual(['Alice', 'Bob']);
  });

  test('name type error', () => {
    expect(() => new HolbertonCourse(24, 24, ['Alice', 'Bob'])).toThrow(
      TypeError,
    );
  });

  test('length type error', () => {
    expect(() => new HolbertonCourse('UCSF', '24', ['Alice', 'Bob'])).toThrow(
      TypeError,
    );
  });

  test('students type error', () => {
    expect(() => new HolbertonCourse('UCSF', 24, 'Alice')).toThrow(TypeError);
    expect(() => new HolbertonCourse('UCSF', 24, [24])).toThrow(TypeError);
  });

  test('name getter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.name).toBe('UCSF');
  });

  test('name setter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.name).toBe('UCSF');

    course.name = 'Holberton';
    expect(course.name).toBe('Holberton');

    expect(() => {
      course.name = 24;
    }).toThrow(TypeError);
  });

  test('length getter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.length).toBe(24);
  });

  test('length setter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.length).toBe(24);

    course.length = 36;
    expect(course.length).toBe(36);

    expect(() => {
      course.length = '24';
    }).toThrow(TypeError);
  });

  test('students getter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.students).toEqual(['Alice', 'Bob']);
  });

  test('students setter', () => {
    const course = new HolbertonCourse('UCSF', 24, ['Alice', 'Bob']);
    expect(course.students).toEqual(['Alice', 'Bob']);

    course.students = ['Charlie', 'David'];
    expect(course.students).toEqual(['Charlie', 'David']);

    expect(() => {
      course.students = 'Alice';
    }).toThrow(TypeError);
    expect(() => {
      course.students = [24];
    }).toThrow(TypeError);
  });
});
