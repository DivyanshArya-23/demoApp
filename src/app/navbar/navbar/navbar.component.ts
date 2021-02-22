import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  links = [
    {
      name: "Create User",
      route: 'user/create',
    },
    {
      name: "View Users",
      route: 'user/viewUsers',
    }
  ]
  ngOnInit(): void {
  }

}
