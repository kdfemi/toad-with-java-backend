import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  // [
  //   new Todo (1, 'Learn to Dance', false, new Date()),
  //   new Todo (2, 'Become an expert', false, new Date()),
  //   new Todo (3, 'Visit Norway', false, new Date())
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // };
  message: string;
  user: string;
  constructor(private todoService: TodoDataService, private router: Router,
              private authService: BasicAuthenticationService) { }

  ngOnInit() {

    this.user = this.authService.getAuthenticatedUser();
    this.extractTodo();
  }

  private extractTodo() {
    this.todoService.retriveAllTodos(this.user).subscribe((res) => this.todos = res);
  }

  deteteTodo(id: number) {
    this.todoService.deleteTodo(this.user, id).subscribe(
      (response) => {
        console.log(response);
        this.extractTodo();
        this.message = 'delete successful';
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['/', 'todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
