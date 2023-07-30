import { Component } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-inicio-fundamentos',
  templateUrl: './inicio-fundamentos.component.html',
  styleUrls: ['./inicio-fundamentos.component.css']
})
export class InicioFundamentosComponent {
  constructor(private temas: TemasService){
    setTimeout(()=>{
      this.temas.tema.emit("fundamentos");
    }, 1);
  }
}
