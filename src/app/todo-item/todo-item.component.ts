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
  private lastId: number;
  constructor() {}

  ngOnInit() {
    this.lastId = this.todos.length + 1;
  }

  addTodo(input: HTMLInputElement) {
    this.todos.push({ id: this.lastId, description: input.value });
    input.value = "";
    this.lastId++;
  }

  removeItem(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
