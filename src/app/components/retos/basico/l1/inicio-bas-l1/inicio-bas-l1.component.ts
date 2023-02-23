import { Component } from '@angular/core';
import { SumarDosNumsService } from 'src/app/services/basico/l1/sumar-dos-nums.service';

@Component({
  selector: 'app-inicio-bas-l1',
  templateUrl: './inicio-bas-l1.component.html',
  styleUrls: ['./inicio-bas-l1.component.css']
})
export class InicioBasL1Component {
  sumar:boolean = false;
  constructor(
    private sumarNums: SumarDosNumsService
  ){}
  ngOnInit() {
    this.sumarNums.sumarNums.subscribe(s => this.sumar=s);
  }
  openSumar() {
    this.sumar = true;
  }
}
