/**
 * @jest-environment jsdom
 */

import { add, remove, populateList,deleteAllCompleted,edit} from '../crud.js';
import ToDo from '../todoList.js';

jest.mock('../todoList');

describe('test for todo list function', () => {
  beforeEach(() => {
    ToDo.list = [];
  });

  describe('test for add storage and html DOM', () => {
    test('test for add funtion', () => {
      add('hello');
      add('goodbye');
      add('bye');
      const storage = JSON.parse(localStorage.getItem('todoList'));
      expect(storage).toHaveLength(3);
    });
    test('test for html DOM when add a task', () => {
      document.body.innerHTML = '<div>'
      + '  <ul id="todo-list"><li></li></ul>'
      + '</div>';
      add('hello');
      populateList();
      const listElements = document.querySelectorAll('#todo-list li');
      expect(listElements).toHaveLength(1);
    });
  });

  describe('test for add storage and html DOM', () => {
    test('test for remove funtion', () => {
      add('hello');
      add('buy');
      remove(0);
      const storage = JSON.parse(localStorage.getItem('todoList'));
      expect(storage).toHaveLength(1);
    });
    test('test for html DOM when remove a task', () => {
      document.body.innerHTML = '<div>'
      + '  <ul id="todo-list"><li></li></ul>'
      + '</div>';
      add('hello');
      add('hello');
      remove(0);
      populateList();
      const listElements = document.querySelectorAll('#todo-list li');
      expect(listElements).toHaveLength(1);
    });
  });

  test('Update complete status', () => {
    const newItem = new ToDo('some text');
    expect(newItem.complete).toBeFalsy();
    newItem.update();
    expect(newItem.complete).toBeTruthy();
  });
});
