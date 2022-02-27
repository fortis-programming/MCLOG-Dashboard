import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
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
    setTimeout(() => {
      this.storeData();
    }, 2000)
  }

  storeData(): void {
    this.data = (JSON.parse(JSON.stringify([{
      "name": "Confirmed case",
      "series": [
        {
          "value": 5130,
          "name": "2021-10"
        },
        {
          "value": 4610,
          "name": "2021-11"
        },
        {
          "value": 4373,
          "name": "2021-12"
        },
        {
          "value": 3364,
          "name": "2022-01"
        },
        {
          "value": 2075,
          "name": "2022-02"
        }
      ]
    },
    {
      "name": "Activity",
      "series": [
        {
          "value": 6927,
          "name": "2021-10"
        },
        {
          "value": 4320,
          "name": "2021-11"
        },
        {
          "value": 2532,
          "name": "2021-12"
        },
        {
          "value": 2910,
          "name": "2022-01"
        },
        {
          "value": this.getTotalActivities(),
          "name": "2022-02"
        }
      ]
    }])));
  }

  getActivities(): void {
    this.activityLogsService.getActivityLogs().subscribe(dataResponse => {
      console.log(dataResponse)
      //this.activityLogs = dataResponse;
    });
  }

  getTotalActivities(): number {
    return this.activityLogs.length;
  }
}
