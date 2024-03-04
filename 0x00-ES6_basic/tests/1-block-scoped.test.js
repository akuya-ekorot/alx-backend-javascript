import taskBlock from '../1-block-scoped';
import { test, expect } from '@jest/globals';

test('taskBlock with true', () => {
  expect(taskBlock(true)).toEqual([false, true]);
});

test('taskBlock with false', () => {
  expect(taskBlock(false)).toEqual([false, true]);
});
