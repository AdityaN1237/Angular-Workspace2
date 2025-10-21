import {Component} from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: false,
  template: `
    <!--    <button (click)="onClick($event)">-->
    <!--      <button (click)="onSave($event)">SaveS</button>-->
    <!--      Click-->
    <!--    </button>-->
    {{ course.title | uppercase }} <br>
    {{ course.rating | number: '2.2-2' }} <br>
    {{ course.students | number }}<br>
    {{ course.price | currency:'INR' }} <br>
    {{ course.releasedDate | date:'shortDate' }} <br>


  `,
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  // onClick($event: any) {
  //   console.log('click');
  // }
  //
  // onSave($event: any) {
  //   $event.stopPropagation();
  //   console.log('save');
  // }

  course = {
    title: "Angular",
    rating: 4.12345,
    students: 12343,
    price: 190.34,
    releasedDate: new Date(2025, 9, 21)
  }
}
