import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListTodo } from './ListTodo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTask(id: number): Observable<ListTodo> {
    return this.http.get<ListTodo>(`${this.apiUrl}/${id}/todos`);
  }
}
