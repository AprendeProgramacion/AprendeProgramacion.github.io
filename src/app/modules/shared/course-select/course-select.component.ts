import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.css']
})
export class CourseSelectComponent {
  @Input() clickPath: string = "";
  @Input() imgPath: string = "";
  @Input() name: string = "";

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
