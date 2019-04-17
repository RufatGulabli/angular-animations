import { Component, OnInit } from "@angular/core";
import { Todo } from "../model/Todo";

@Component({
  selector: "todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  public todos: Todo[] = [
    { id: 1, description: "Angular Routings" },
    { id: 2, description: "Angular Animations" },
    { id: 3, description: "Angular Observables" }
  ];
  constructor() {}

  ngOnInit() {}

  addTodo(input: HTMLInputElement) {
    let size = this.todos.length;
    console.log("Size : ", size);
    let nextId = this.todos[size - 1].id;
    console.log("Next Id : ", nextId);
    this.todos.push({ id: nextId + 1, description: input.value });
    input.value = "";
  }

  removeItem(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
