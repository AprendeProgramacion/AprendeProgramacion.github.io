import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() data:any;
  solution:boolean = false;

  constructor(private modal: ModalService){}

  solutionToggle(){
    this.solution = !this.solution;
  }
  close(){
    this.modal.view.emit(false);
  }
}
