import {
  beforeEach,
  beforeEachProviders,
  describe,
  xdescribe,
  expect,
  it,
  xit,
  async,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';


describe('Component: TodoApp', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TodoAppComponent, TodoService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TodoAppComponent],
      (component: TodoAppComponent) => {
    expect(component).toBeTruthy();
  }));

  // it('should create the component', inject([], () => {
  //   return builder.createAsync(TodoAppComponentTestController)
  //     .then((fixture: ComponentFixture<any>) => {
  //       let query = fixture.debugElement.query(By.directive(TodoAppComponent));
  //       expect(query).toBeTruthy();
  //       expect(query.componentInstance).toBeTruthy();
  //     });
  // }));
});

@Component({
  selector: 'test',
  template: `
    <app-todo-app></app-todo-app>
  `,
  directives: [TodoAppComponent]
})
class TodoAppComponentTestController {
}

