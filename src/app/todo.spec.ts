import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/testing';
import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});
