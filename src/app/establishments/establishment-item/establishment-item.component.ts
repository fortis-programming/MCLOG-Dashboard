import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivityLogsModel } from 'src/app/_shared/models/activityLogs.model';

@Component({
  selector: 'app-establishment-item',
  templateUrl: './establishment-item.component.html',
  styleUrls: ['./establishment-item.component.scss'],
})
export class EstablishmentItemComponent implements OnInit {
  @Input() establishment: string = '';


  constructor(private activityLogsService: ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }
 
  activityLog: ActivityLogsModel[] = [];
  getActivities(): void {
    this.activityLogsService.getActivityLogs().subscribe((dataResponse) => {
      this.activityLog = dataResponse.filter((data) => data.buildingName.toLowerCase() === this.establishment.toLowerCase())
    });
  }
  getBuildingRecordCount(): number {
    return this.activityLog.length;
  }
}
