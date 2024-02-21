import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  { path: 'users', component: UserListComponent },
  { path: 'user/add', component: UserUpsertComponent },
  { path: 'user/:id', component: UserUpsertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
