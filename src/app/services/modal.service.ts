import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  view: EventEmitter<boolean>;
  constructor() {
    this.view = new EventEmitter();
  }
}
