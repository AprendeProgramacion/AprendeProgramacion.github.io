import { Component } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-inicio-adi',
  templateUrl: './inicio-adi.component.html',
  styleUrls: ['./inicio-adi.component.css']
})
export class InicioADIComponent {
  constructor(private temas: TemasService){
    setTimeout(()=>{
      this.temas.tema.emit("adi");
    }, 1);
  }
}
