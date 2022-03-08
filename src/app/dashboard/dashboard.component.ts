import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { ActivitiesModel } from '../_shared/models/activities.model';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: { value: number; name: string }[] = [];
  
  constructor(
    private activityLogsService: ActivityService
  ) {}

  activityLogs: ActivityLogsModel[] = [];

  ngOnInit(): void {
    this.getActivities();
    this.getTotalPUI()
  }

  // storeData(): void {
  //   this.data = (JSON.parse(JSON.stringify([{
  //     "name": "PUI",
  //     "series": [
  //       {
  //         "value": 5130,
  //         "name": "2021-10"
  //       },
  //       {
  //         "value": 4610,
  //         "name": "2021-11"
  //       },
  //       {
  //         "value": 4373,
  //         "name": "2021-12"
  //       },
  //       {
  //         "value": 3364,
  //         "name": "2022-01"
  //       },
  //       {
  //         "value": 2075,
  //         "name": "2022-02"
  //       }
  //     ]
  //   },
  //   {
  //     "name": "Activity",
  //     "series": [
  //       {
  //         "value": 6927,
  //         "name": "2021-10"
  //       },
  //       {
  //         "value": 4320,
  //         "name": "2021-11"
  //       },
  //       {
  //         "value": 2532,
  //         "name": "2021-12"
  //       },
  //       {
  //         "value": 2910,
  //         "name": "2022-01"
  //       },
  //       {
  //         "value": 22,
  //         "name": "2022-02"
  //       }
  //     ]
  //   }])));
  // }

  getActivities(): void {
    this.activityLogsService.getActivityLogs().subscribe(dataResponse => {
      this.activityLogs = dataResponse;
    });
  }

  activities: ActivitiesModel[] = [];
  getTotalPUI(): void {
    this.activityLogsService.getActivities().subscribe(response => {
      this.activities = response;
    });
  }
}
