import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  mobileRegex = /^[6-9][0-9]{9}$/;

  signupForm: FormGroup;
  signupFormValidators = {
    name: [Validators.required],
    gender: [Validators.required],
    email: [
      Validators.required,
      Validators.pattern(this.emailRegex)
    ],
    mobile: [
      Validators.required,
      Validators.pattern(this.mobileRegex)
    ],
  }
  categoryOptions = ["General", "OBC", "SC/ST"];
  technologyList = ["C", "C++", "Java", "Python", "JavaScript"]

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', this.signupFormValidators.name),
      gender: new FormControl('', this.signupFormValidators.gender),
      email: new FormControl('', this.signupFormValidators.email),
      mobile: new FormControl('', this.signupFormValidators.mobile),
      category: new FormControl(),
      technology: new FormControl(),
    });
  }

  onPreviewClick() {
    console.log('form', this.signupForm)
  }

}
