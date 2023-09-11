import { Component } from '@angular/core';
import { ContentService } from 'src/app/modules/retos/services/content.service';
import { EvaluarDiaService } from 'src/app/services/basico/l2/evaluar-dia.service';
import { SacarDefinitivaService } from 'src/app/services/basico/l2/sacar-definitiva.service';
import { ModalService } from 'src/app/services/modal.service';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-inicio-bas-l2',
  templateUrl: './inicio-bas-l2.component.html',
  styleUrls: ['./inicio-bas-l2.component.css']
})
export class InicioBasL2Component {
  modalInfo:any = {
    "title": "",
    "description": "",
    "solutionImg": "",
    "solutionAlt": "",
    "solutionDesc1": "",
    "solutionDesc2": ""
  }
  modalView: boolean = false;
  title:string = "Retos Basicos Nivel 2";
  constructor(
    private content: ContentService,
    private txt:TitleTextService,
    private modal:ModalService
  ){}

  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
    this.modal.view.subscribe(s => this.modalView = s);
  }

  openModal(level:string,name:string) {
    this.modalInfo.title = (this.content.basico)[level][name].title;
    this.modalInfo.description = (this.content.basico)[level][name].description;
    this.modalInfo.solutionImg = (this.content.basico)[level][name].solutionImg;
    this.modalInfo.solutionAlt = (this.content.basico)[level][name].solutionAlt;
    this.modalInfo.solutionDesc1 = (this.content.basico)[level][name].solutionDesc1;
    this.modalInfo.solutionDesc2 = (this.content.basico)[level][name].solutionDesc2;
    this.modalView = true;
  }
}
