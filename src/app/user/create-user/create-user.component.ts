import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/modal.service';
import { REGEX } from './../../../utils/regex';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private _modalService: ModalService) { }

  tempInfoUser: object = {};
  showViewFormModal = this._modalService.showModal;
  checkboxTouched: boolean = false;
  signupForm: FormGroup;
  signupFormValidators = {
    name: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(REGEX.FULLNAME),
    ],
    gender: [Validators.required],
    email: [
      Validators.required,
      Validators.pattern(REGEX.EMAIL),
    ],
    mobile: [
      Validators.required,
      Validators.pattern(REGEX.MOBILE),
    ],
    category: [
      Validators.required,
    ],
  }
  categoryOptions = ["General", "OBC", "SC/ST"];
  technologyList = [
    { name: "C", value: 'c', selected: false },
    { name: "C++", value: 'c++', selected: false },
    { name: "Java", value: 'java', selected: false },
    { name: "Python", value: 'python', selected: false },
    { name: "JavaScript", value: 'javascript', selected: false },
  ];
  selectedTechnologyNames: Array<string> = [];

  ngOnInit(): void {
    this._modalService.showModalUpdated.subscribe((state) => {
      this.showViewFormModal = this._modalService.getShowModal();
    })
    this.signupForm = new FormGroup({
      name: new FormControl('', this.signupFormValidators.name),
      gender: new FormControl('', this.signupFormValidators.gender),
      email: new FormControl('', this.signupFormValidators.email),
      mobile: new FormControl('', this.signupFormValidators.mobile),
      category: new FormControl('', this.signupFormValidators.category),
    });
  }


  OnCheckboxChange(e: any, ind: number) {
    if (!this.checkboxTouched)
      this.checkboxTouched = true;
    let value = e.target.value;
    let index = this.selectedTechnologyNames.indexOf(value);
    if (index === -1)
      this.selectedTechnologyNames.push(value)
    else
      this.selectedTechnologyNames.splice(index, 1);
  }

  getValidUserObject() {
    return {
      name: this.signupForm.get('name').value,
      gender: this.signupForm.get('gender').value,
      email: this.signupForm.get('email').value,
      mobile: this.signupForm.get('mobile').value,
      category: this.signupForm.get('category').value,
      technology: this.selectedTechnologyNames,
    }
  }

  onPreviewClick() {
    if (this.signupForm.valid && this.selectedTechnologyNames.length) {
      this.tempInfoUser = this.getValidUserObject();
      this.showViewFormModal = true;
    } else {
      this.checkboxTouched = true;
      Object.keys(this.signupForm.controls).forEach(field => {
        const control = this.signupForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
