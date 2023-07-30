import { Component } from '@angular/core';
import { RetosService } from 'src/app/services/retos.service';

@Component({
  selector: 'app-basico-view',
  templateUrl: './basico-view.component.html',
  styleUrls: ['./basico-view.component.css']
})
export class BasicoViewComponent {
  constructor(private retos: RetosService){
    setTimeout(()=>{
      this.retos.reto.emit("fundamentos");
    }, 1);
  }
}
