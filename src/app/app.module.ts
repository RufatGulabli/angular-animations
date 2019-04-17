import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
