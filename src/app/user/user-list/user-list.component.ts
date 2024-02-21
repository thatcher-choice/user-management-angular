import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  filteredUserList: any[] = [];
  searchQuery: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch user list from the service
    this.userList = this.userService.getAllUsers();
    this.filteredUserList = this.userList.slice();
  }

  deleteUser(user: any): void {
    this.userService.deleteUser(user);
    this.userList = this.userService.getAllUsers();
    this.filteredUserList = this.userList.slice();
  }
  filterUsers(): void {
    this.filteredUserList = this.userList.filter(user =>
      user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
