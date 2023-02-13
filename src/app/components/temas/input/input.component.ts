import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  nombre:string = '';
  texto:string = 'ingresa tu nombre en la parte superior para saludarte apropiadamente';
  update(){
    let aux = (<HTMLInputElement>document.getElementById('input-name')).value;
    if(aux != ''){
      this.nombre=' '+aux;
      this.texto= 'ingresaste tu nombre y fué procesado para arrojar este resultado'
    }
  }
}
