import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-input-binding-child',
  templateUrl: './input-binding-child.component.html',
  styleUrls: ['./input-binding-child.component.css'],
})
export class InputBindingChildComponent {
  // 接收來自於父元件的變數
  @Input()
  hero!: Hero;
  // 接收指定的父元件的變數，官方開發指南不建議這樣做
  @Input('master')
  masterName = '';

  constructor() {}
}
