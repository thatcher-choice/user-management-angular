import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserUpsertComponent,
    UserListComponent,
  ],
  providers:[UserService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    UserUpsertComponent,
    UserListComponent
  ]
})
export class UserModule { }
