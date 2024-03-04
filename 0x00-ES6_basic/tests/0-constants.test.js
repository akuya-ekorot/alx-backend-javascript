import { taskFirst, taskNext } from '../0-constants';
import { test, expect } from '@jest/globals';

test('works with constants', () => {
  expect(`${taskFirst()} ${taskNext()}`).toBe(
    'I prefer const when I can. But sometimes let is okay',
  );
});
