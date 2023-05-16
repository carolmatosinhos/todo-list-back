import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserDetailComponent } from './todo-list/user-detail/user-detail.component';
import { UsersComponent } from './todo-list/users/users.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'users', component: UsersComponent  },
  { path: 'users/:id/todos', component: UserDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
