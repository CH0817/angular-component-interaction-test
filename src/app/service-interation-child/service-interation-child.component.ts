import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-service-interation-child',
  templateUrl: './service-interation-child.component.html',
  styleUrls: ['./service-interation-child.component.css'],
})
export class ServiceInterationChildComponent implements OnDestroy {
  // input binding
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  //
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
