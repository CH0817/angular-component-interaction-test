import { Component } from '@angular/core';

@Component({
  selector: 'app-ngonchange-inetration-parent',
  templateUrl: './ngonchange-inetration-parent.component.html',
  styleUrls: ['./ngonchange-inetration-parent.component.css'],
})
export class NgonchangeInetrationParentComponent {
  major = 1;
  minor = 23;

  constructor() {}

  newMinor() {
    // 子元件的 ngOnChanges() 只會收到 minor 的變化
    this.minor++;
  }

  newMajor() {
    // 子元件的 ngOnChanges() 只會到 major + minor 的變化
    this.major++;
    this.minor = 0;
  }
}
