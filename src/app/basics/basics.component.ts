import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayPara = true;
  displayBtnClicks = 0;
  toggleParaDisplay() {
    this.displayBtnClicks++;
    this.displayPara = !this.displayPara;
  }

  todoItems: Array<string> = ['asd', 'asd', 'asd', 'asd', 'asdasdasdadadsadsadadasdasdasdasdsdsadsadasdsa'];
  inputText: string = "";

  addTodo() {
    if (this.inputText) {
      this.todoItems.push(this.inputText);
      this.inputText = "";
    }
  }
  updateInput(event: any) {
    this.inputText = event?.target?.value;
  }

}
