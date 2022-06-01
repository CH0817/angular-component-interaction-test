import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventemitter-child',
  templateUrl: './eventemitter-child.component.html',
  styleUrls: ['./eventemitter-child.component.css'],
})
export class EventemitterChildComponent {
  // 父元件傳遞過來
  @Input() name = '';
  // 父元件監聽的變數，必須加上 @Output 且型態為 EventEmitter
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  constructor() {}
}
