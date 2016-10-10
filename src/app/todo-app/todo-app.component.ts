import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';



@Component({
  // TodoAppComponent's dependency injector will now recognize TodoService class
  // as a dependency injection token and return a single instance of TodoService
  // when we ask for it
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent {

  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with dependency injection token 'TodoService'
  // and assign it to a property called 'todoService'
  constructor(private todoService: TodoService) {}

  // Service is now available as this.todoService
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
