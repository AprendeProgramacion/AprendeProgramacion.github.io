import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  nombre:string = '';
  texto:string = 'ingresa tu nombre en la parte superior para saludarte apropiadamente';
  title:string = "Entrada estandar";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
  update(){
    let aux = (<HTMLInputElement>document.getElementById('input-name')).value;
    if(aux != ''){
      this.nombre=' '+aux;
      this.texto= 'ingresaste tu nombre y fué procesado para arrojar este resultado'
    }
  }
}
