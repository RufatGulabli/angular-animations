import { customAnimations } from "./../animations/animations";
import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../model/Todo";
import { expandCollapse, removeBounce } from "./todo.animations";

@Component({
  selector: "todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
  animations: [
    customAnimations.fade,
    expandCollapse,
    removeBounce
    // trigger("todoAnimation", [
    //   transition(":enter", [style({ opacity: 0 }), animate(1000)]),
    //   transition(":leave", [
    //     animate(400),
    //     style({ backgroundColor: "indianred" }),
    //     useAnimation(customAnimations.bounceToLeftAnimation)
    //   ])
    // ])
  ]
})
export class TodoItemComponent implements OnInit {
  @Input("basliq") title: string;
  showHide: boolean = false;
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
    this.todos.unshift({ id: this.lastId, description: input.value });
    input.value = "";
    this.lastId++;
  }

  removeItem(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  animationStart($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }

  onClick() {
    this.showHide = !this.showHide;
  }
}
