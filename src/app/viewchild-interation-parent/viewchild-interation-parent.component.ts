import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewchildInterationChildComponent } from '../viewchild-interation-child/viewchild-interation-child.component';

@Component({
  selector: 'app-viewchild-interation-parent',
  templateUrl: './viewchild-interation-parent.component.html',
  styleUrls: ['./viewchild-interation-parent.component.css'],
})
export class ViewchildInterationParentComponent implements AfterViewInit {
  // @ViewChild 宣告
  @ViewChild(ViewchildInterationChildComponent)
  private child!: ViewchildInterationChildComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `ViewchildInterationChildComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.child.seconds), 0);
  }

  start() {
    // 調用子元件的方法
    this.child.start();
  }
  stop() {
    // 調用子元件的方法
    this.child.stop();
  }

  constructor() {}
}
