import { add, remove } from '../crud.js';

jest.mock('../todoList');

describe('test for todo list function', () => {
  test('test for add funtion', () => {
    add('hello');
    add('goodbye');
    add('bye');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(3);
  });
  test('test for remove funtion', () => {
    remove(0);
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(2);
  });
});
