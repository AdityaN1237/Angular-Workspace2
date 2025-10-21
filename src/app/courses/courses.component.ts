import {Component} from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  // template: `<h1>{{ "Title:- " + title }}</h1>`,
  template: `
    <!--    <h1>{{ getTitle() }}</h1>-->
    <!--    <ul>-->
    <!--      <li *ngFor="let course of courses">-->
    <!--        {{ course }}-->
    <!--      </li>-->
    <!--    </ul>-->
    {{ text | summary }}
  `,
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // title = "List of Courses";
  //
  // getTitle() {
  //   return this.title;
  // }
  //
  // courses: any;
  //
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }

  text = 'Hello my name is Aditya Nikam'

}
