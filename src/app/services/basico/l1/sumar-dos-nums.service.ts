import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumarDosNumsService {
  sumarNums: EventEmitter<boolean>;
  constructor() {
    this.sumarNums = new EventEmitter();
  }
}
