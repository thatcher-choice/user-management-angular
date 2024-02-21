import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent implements OnInit {
  userForm: FormGroup;
  userExists = false;
  userId: number;
  userList;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.userList = this.userService.getAllUsers();
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.userExists = true;
        this.populateFormWithUserData(this.userId);
      }
    });

  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }
  populateFormWithUserData(userId: number): void {
    const userData = this.userService.getUserById(userId);
    this.userForm.patchValue(userData);
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      const userExists = this.userService.checkIfUserExists(formData.email);
      const isExistingUser = this.checkUserExists(formData);
      if (isExistingUser) {
        this.errorMsg = "User already exists!"
        return
      }
      if (userExists) {
        this.userService.updateUser(formData);
      } else {
        const existingIDs: number[] = this.userList.map(user => user.id); // Extract existing IDs from the user list
        formData.id = this.userService.generateUniqueID(existingIDs);
        this.userService.addUser(formData);
      }
      
      this.router.navigateByUrl('/users');
    } else {
      this.userForm.markAllAsTouched();
    }
  }
  checkUserExists(newUser: any): boolean {
    for (const user of this.userList) {
      if ((user.email === newUser.email || user.phone === newUser.phone) && user.id !== newUser.id) {
        return true; 
      }
    }
    return false; // User doesn't exist
  }
}
