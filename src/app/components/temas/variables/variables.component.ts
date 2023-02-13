import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  b1:boolean = false;
  b2:boolean = false;
  b3:boolean = false;
  b4:boolean = false;
  b5:boolean = false;
  toggleB1(){
    this.b1=!this.b1;
    this.b2=false;
    this.b3=false;
    this.b4=false;
    this.b5=false;
  }
  toggleB2(){
    this.b2=!this.b2;
    this.b1=false;
    this.b3=false;
    this.b4=false;
    this.b5=false;
  }
  toggleB3(){
    this.b3=!this.b3;
    this.b1=false;
    this.b2=false;
    this.b4=false;
    this.b5=false;
  }
  toggleB4(){
    this.b4=!this.b4;
    this.b1=false;
    this.b2=false;
    this.b3=false;
    this.b5=false;
  }
  toggleB5(){
    this.b5=!this.b5;
    this.b1=false;
    this.b2=false;
    this.b3=false;
    this.b4=false;
  }
}
