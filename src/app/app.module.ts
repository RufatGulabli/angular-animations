import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
