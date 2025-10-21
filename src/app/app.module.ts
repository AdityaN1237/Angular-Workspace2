import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses/courses.service';
import {SummaryPipe} from "./summary.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryPipe,
    SummaryPipe
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
