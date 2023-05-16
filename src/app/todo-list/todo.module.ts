import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TodoListComponent } from './todo-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [],
  declarations: [
    TodoListComponent,
    UserDetailComponent,
    UsersComponent
  ],
  providers: [],
})
export class TodoModule { }
