import { Injectable } from '@angular/core';
import { TODOS } from '../mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  
  todos = []

  getTodos() {
    this.todos = JSON.parse(localStorage.getItem('TODOS')) || TODOS;
    return this.todos;
  }

  setTodo (data) {
    this.todos.forEach((item) => {
      if (item.id === data.id) {
        Object.assign(item, data)
      }
    })
    localStorage.setItem('TODOS', JSON.stringify(this.todos))
  }

  addTodo (data) {
    this.todos.push(data);
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  delTodo (data) {
    this.todos.splice(this.todos.indexOf(data), 1);
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }
}
