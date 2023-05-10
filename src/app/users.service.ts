import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private deleteUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTask(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/todos`);
  }

  removeTask(id: number) {
    const url = `${this.deleteUrl}/${id}`;
    return this.http.delete(url)
  }
}
