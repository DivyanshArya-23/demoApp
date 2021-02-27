import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {

  @Input('data')
  data: any = {};

  keys = [];

  constructor(
    private _userService: UserService,
    private _modalService: ModalService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.keys = Object.keys(this.data);
  }

  onCancel() {
    this._modalService.hideModal()
  }
  capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  onSubmit() {
    this._userService.addEmployee(this.data);
    this._modalService.hideModal()
  }
}
