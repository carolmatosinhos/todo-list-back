import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { TodoModule } from './todo-list/todo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,

  ], //provider = fornecedor. São os serviços fornecedores
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
