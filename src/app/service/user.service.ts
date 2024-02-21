import { Injectable } from '@angular/core';
import { User } from '../user/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890', address:'dummy address 1' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '9876543210', address:'dummy address 2' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', phone: '5555555555', address:'dummy address 3' },
    { id: 4, firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', phone: '6666666666', address:'dummy address 4' },
    { id: 5, firstName: 'Emily', lastName: 'Brown', email: 'emily@example.com', phone: '7777777777', address:'dummy address 5' },
    { id: 6, firstName: 'Michael', lastName: 'Wilson', email: 'michael@example.com', phone: '8888888888', address:'dummy address 6' },
    { id: 7, firstName: 'Emma', lastName: 'Jones', email: 'emma@example.com', phone: '9999999999', address:'dummy address 7' },
    { id: 8, firstName: 'William', lastName: 'Martinez', email: 'william@example.com', phone: '1111111111', address:'dummy address 8' },
    { id: 9, firstName: 'Olivia', lastName: 'Taylor', email: 'olivia@example.com', phone: '2222222222', address:'dummy address 9' },
    { id: 10, firstName: 'James', lastName: 'Anderson', email: 'james@example.com', phone: '3333333333', address:'dummy address 10' },
    { id: 11, firstName: 'Sophia', lastName: 'Lee', email: 'sophia@example.com', phone: '4444444444', address:'dummy address 11' },
    { id: 12, firstName: 'Benjamin', lastName: 'Garcia', email: 'benjamin@example.com', phone: '5555555555', address:'dummy address 12' },
    { id: 13, firstName: 'Ava', lastName: 'Hernandez', email: 'ava@example.com', phone: '6666666666', address:'dummy address 13' },
    { id: 14, firstName: 'Alexander', lastName: 'King', email: 'alexander@example.com', phone: '7777777777', address:'dummy address 14' },
    { id: 15, firstName: 'Mia', lastName: 'Lopez', email: 'mia@example.com', phone: '8888888888', address:'dummy address 15' },
    { id: 16, firstName: 'Charlotte', lastName: 'Perez', email: 'charlotte@example.com', phone: '9999999999', address:'dummy address 16' },
    { id: 17, firstName: 'Ethan', lastName: 'Moore', email: 'ethan@example.com', phone: '1111111111', address:'dummy address 17' },
    { id: 18, firstName: 'Amelia', lastName: 'Robinson', email: 'amelia@example.com', phone: '2222222222', address:'dummy address 18' },
    { id: 19, firstName: 'Liam', lastName: 'Stewart', email: 'liam@example.com', phone: '3333333333', address:'dummy address 19' },
    { id: 20, firstName: 'Abigail', lastName: 'Scott', email: 'abigail@example.com', phone: '4444444444', address:'dummy address 20' }
  ];
  
  constructor() { }

  addUser(user: any): void {
    this.users.push(user);
  }

  updateUser(user: any): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  checkIfUserExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }

  generateUniqueID(existingIDs: number[]): number {
    let randomID: number;
    do {
        randomID = Math.floor(Math.random() * 1000000000); // Generate a random number
    } while (existingIDs.includes(randomID)); // Check if the number already exists in the list
    return randomID;
}

  getAllUsers(): any[] {
    return this.users;
  }

  getUserById(id:number){
    return this.users.find(user => user.id === id);
  }
  deleteUser(user: any): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
