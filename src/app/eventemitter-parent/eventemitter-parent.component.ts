import { Component } from '@angular/core';

@Component({
  selector: 'app-eventemitter-parent',
  templateUrl: './eventemitter-parent.component.html',
  styleUrls: ['./eventemitter-parent.component.css'],
})
export class EventemitterParentComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr IQ', 'Celeritas', 'Bombasto'];

  // 子元件的變數 voted 發生變化時會觸發此 function；具體宣告在 html 裡面
  // function 的參數就是子元件傳遞的變數
  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

  constructor() {}
}
