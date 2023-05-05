import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { UsersComponent } from './users/users.component';
=======
>>>>>>> 44615e29ecb66fb1d205a9b0098e44091858c3e9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TodoListComponent,
    UsersComponent
=======
    TodoListComponent
>>>>>>> 44615e29ecb66fb1d205a9b0098e44091858c3e9
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
