import { Component } from '@angular/core';
import { TitleTextService } from 'src/app/services/title/title-text.service';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css']
})
export class PullRequestsComponent {
  title:string = "Pull Requests";
  constructor(private txt:TitleTextService){}
  ngOnInit(){
    setTimeout(() => this.txt.text.emit(this.title),1);
  }
}
