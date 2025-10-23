import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  @Input('is-favorite') isFavorite: boolean = false;
  @Output('change') click = new EventEmitter();

  onclick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newObj: this.isFavorite});
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
