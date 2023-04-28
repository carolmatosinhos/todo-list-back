import { Component } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public newTask = "";
  public tasks: string[] = [];

  ngOnInit() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
    this.saveTasks();
  }

  removeTask(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1)
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
