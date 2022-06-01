import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setter-inetration-child',
  templateUrl: './setter-inetration-child.component.html',
  styleUrls: ['./setter-inetration-child.component.css'],
})
export class SetterInetrationChildComponent {
  private _name = '';

  // @Input 寫在 getter 或 setter 都可
  @Input()
  get name(): string {
    // getter 傳遞到變數 setter-inetration-child.component.html
    return this._name;
  }

  set name(name: string) {
    // setter 接收父元件傳遞過來的變數
    this._name = (name && name.trim()) || '<no name set>';
  }

  constructor() {}
}
