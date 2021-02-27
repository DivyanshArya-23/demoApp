import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/modal.service';
import { UserService } from '../user.service';
import { titleCase } from './../../../utils/helper';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {

  @Input('data')
  data: any = {};

  keys = [];
  submitted = false;
  titleCase = titleCase;
  constructor(
    private _userService: UserService,
    private _modalService: ModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.keys = Object.keys(this.data);
  }

  onCancel() {
    this._modalService.hideModal()
  }

  onSubmit() {
    this._userService.addEmployee(this.data);
    this.submitted = true;
    setTimeout(() => {
      this._modalService.hideModal();
      this.router.navigate(["user/viewUsers"])
    }, 2000);

  }
}
