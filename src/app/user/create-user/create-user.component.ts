import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

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
    category: [
      Validators.required,
    ],
    technology: [],
  }
  categoryOptions = ["General", "OBC", "SC/ST"];
  technologyList = [
    { name: "C", value: 'c', selected: false },
    { name: "C++", value: 'c++', selected: false },
    { name: "Java", value: 'java', selected: false },
    { name: "Python", value: 'python', selected: false },
    { name: "JavaScript", value: 'javascript', selected: false },
  ];
  selectedTechnologyNames = [];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', this.signupFormValidators.name),
      gender: new FormControl('', this.signupFormValidators.gender),
      email: new FormControl('', this.signupFormValidators.email),
      mobile: new FormControl('', this.signupFormValidators.mobile),
      category: new FormControl('', this.signupFormValidators.category),
      technology: this.createTechnologyArray(this.technologyList)
    });
  }

  createTechnologyArray(techList: object[]) {
    const arr = techList.map((tech: any) => {
      return new FormControl(tech.selected || false)
    })
    return new FormArray(arr)
  }

  OnCheckboxChange(e: Event) {
    // this.signupForm.get('technology')?.map(tech=>{
      console.log('f')
    // })
    console.log('checkboxEvent', e)
  }
  onPreviewClick() {
    console.log('form', this.signupForm)
  }

}
