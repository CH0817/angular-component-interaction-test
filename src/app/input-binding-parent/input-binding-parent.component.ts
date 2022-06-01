import { Component } from '@angular/core';
import { HEROES } from '../hero';

@Component({
  selector: 'app-input-binding-parent',
  templateUrl: './input-binding-parent.component.html',
  styleUrls: ['./input-binding-parent.component.css'],
})
export class InputBindingParentComponent {
  heroes = HEROES;
  master = 'Master';

  constructor() {}
}
