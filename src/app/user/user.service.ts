import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  employeeData: Array<object> = [
    {
      name: 'Dummy 1',
      gender: 'male',
      email: 'abc@emp.com',
      mobile: '9998889998',
      category: 'general',
      technology: ['c', 'c++', 'java', 'javascript', 'python']
    },
    {
      name: 'Dummy 2',
      gender: 'male',
      email: 'abc@emp.com',
      mobile: '9998889998',
      category: 'general',
      technology: ['c', 'c++', 'java']
    }
  ]

  getEmployeeData() {
    return this.employeeData;
  }

  addEmployee(newEmp: object) {
    this.employeeData.push(newEmp)
  }
}
