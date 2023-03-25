import { Component, OnInit } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  nombre: string ='';
  constructor(
    private title:TitleTextService
  ){}
  ngOnInit() {
    this.title.text.subscribe(s => this.nombre = s);
  }
}
