import { Injectable,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showModal: boolean = true;
  showModalUpdated: any = new EventEmitter();

  toggleModal() {
    this.showModal = !this.showModal;
    this.showModalUpdated.emit(String(this.showModal));
  }

  viewModal() {
    this.showModal = true;
    this.showModalUpdated.emit(String(this.showModal));
  }

  hideModal() {
    this.showModal = false;
    this.showModalUpdated.emit(String(this.showModal));
  }

  getShowModal() {
    return this.showModal;
  }
}
