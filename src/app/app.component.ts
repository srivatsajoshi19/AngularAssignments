import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'http';
  users: String[] = [];

  constructor(private usersService: UsersService) {}

  getUsers() {
    this.usersService.getData().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
