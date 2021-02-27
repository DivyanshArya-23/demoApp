import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { titleCase } from './../../../utils/helper';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss']
})
export class ViewAllUsersComponent implements OnInit {

  constructor(private _userService: UserService) { }

  fetchedUserData: any = [];
  titleCase = titleCase;
  keys: Array<string> = [
    'name',
    'gender',
    'email',
    'mobile',
    'category',
    'technology',
  ];
  ngOnInit(): void {
    this.fetchedUserData = this._userService.getEmployeeData();
  }

}
