import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/todo';
import { reject } from 'q';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  user: string;
  constructor(private route: ActivatedRoute, private router: Router,
              private authService: BasicAuthenticationService, private todoService: TodoDataService) { }
  ngOnInit() {
    // this.todo = new Todo(1, '', false, new Date());
    const pathValue = 'id';
    this.user = this.authService.getAuthenticatedUser();
    console.log(this.user);
    this.id = this.route.snapshot.params[pathValue];
    const promise = new Promise((resolve, rejected) => {
      if ( +this.id !== -1) {
        this.todoService.getTodo(this.user, this.id).subscribe(
          (todo) => {
          this.todo = todo;

          resolve(true);
        },
        (err) => rejected(err));
      } else {
        resolve(false);
      }
    });
    promise.then(
      (state) => {
        if (!state) {
          this.todo = new Todo(this.id, '', false, null);
        }
      });
  }
  saveTodo() {
    if ( +this.id === -1) {
      this.todoService.createTodo(this.user, this.todo).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['todos']);
        });
    } else {
      this.todoService.updateTodo(this.user, this.id, this.todo).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['todos']);
        },
        (err) => console.log(err)
      );
    }

  }
}
