import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleTextService {
  text:EventEmitter<string>;
  constructor() {
    this.text = new EventEmitter();
  }
}
