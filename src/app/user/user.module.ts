import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { ViewformComponent } from './viewform/viewform.component';


@NgModule({
  declarations: [
    CreateUserComponent,
    ViewAllUsersComponent,
    ViewformComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
