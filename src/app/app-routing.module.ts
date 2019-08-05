import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardGuard } from './service/routeguard.guard';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteguardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouteguardGuard]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouteguardGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
