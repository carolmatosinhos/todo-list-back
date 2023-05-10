import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<any> = new Array(); //declarando a variavel users. A variavel começa sem nenhum valor. O código também inicializa a variável com um novo array vazio usando o construtor "new Array()".

  constructor(private userService: UsersService ) {  }

  ngOnInit() {
    this.listUsers()
  }

  listUsers() {
    this.userService.listUsers().subscribe(users => {
      this.users = users;
    }, err => {
      console.log("Erro ao carregar usuários.")
    } )
  }
}
