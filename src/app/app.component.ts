import {Component} from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  post = {
    title: 'courses',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
