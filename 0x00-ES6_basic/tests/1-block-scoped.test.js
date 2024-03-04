import taskBlock from '../1-block-scoped';
import { test, expect } from '@jest/globals';

test('taskBlock', () => {
  expect(taskBlock(true)).toEqual([false, true]);
  expect(taskBlock(false)).toEqual([false, true]);
});
