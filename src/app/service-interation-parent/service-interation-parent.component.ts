import { Component } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-service-interation-parent',
  templateUrl: './service-interation-parent.component.html',
  styleUrls: ['./service-interation-parent.component.css'],
  // 導入 MissionService
  providers: [MissionService],
})
export class ServiceInterationParentComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  // 將 MissionService 放入建構子
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe((astronaut) => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
