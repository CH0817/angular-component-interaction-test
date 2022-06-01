import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchange-inetration-child',
  templateUrl: './ngonchange-inetration-child.component.html',
  styleUrls: ['./ngonchange-inetration-child.component.css'],
})
// 必須 implements OnChanges
export class NgonchangeInetrationChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  // changes 包含所有有變化的 input properties
  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    // propName = input properties name
    for (const propName in changes) {
      // changedProp = SimpleChanges
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  constructor() {}
}
