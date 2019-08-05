import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/todo';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  getTodo(username, id) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo);
  }
}
