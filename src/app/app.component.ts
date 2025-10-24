import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // post = {
  //   title: 'courses',
  //   isFavorite: true
  // }
  //
  // onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
  //   console.log('Favorite changed', eventArgs);
  // }
  // courses = [1,2];
  // viewMode = 'map'

  courses = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React'},
    {id: 3, name: 'Java'},
  ]

  onAdd() {
    this.courses.push({id: 4, name: 'SpringBoot'});
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
