import { Component, OnInit } from '@angular/core';
import { ListTodo } from '../ListTodo';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { UsersComponent } from '../users/users.component';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  listtodo: ListTodo[] = [];

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    this.getListTodo()
  }

  ngOnInit() {
    this.getListTodo();
  }

  getListTodo() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.usersService.getTask(id).subscribe((listtodo) => {
      this.listtodo = listtodo;
      console.log(listtodo)
    })
  }
}

