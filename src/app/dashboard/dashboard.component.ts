import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { ActivitiesModel } from '../_shared/models/activities.model';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: { value: number; name: string }[] = [];
  establishments = ['Penshoppe', 'Bench', 'Mcdo'];
  constructor(private activityLogsService: ActivityService) {}

  activityLogs: ActivityLogsModel[] = [];

  ngOnInit(): void {
    this.getActivities();
    this.getTotalPUI();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  expandTodaysList = true;
  expandTodayList(): void {
    this.expandTodaysList
      ? (this.expandTodaysList = false)
      : (this.expandTodaysList = true);
  }

  filter = 'MCDO';
  loading = true;
  onChange(deviceValue: any) {
    this.filter = deviceValue.value;
    this.ngOnInit();
  }

  expandAllList = false;
  expandAllData(): void {
    this.expandAllList
      ? (this.expandAllList = false)
      : (this.expandAllList = true);
  }

  getActivities(): void {
    this.activityLogsService.getActivityLogs().subscribe((dataResponse) => {
      this.activityLogs = dataResponse.filter(
        (data) =>
          data.buildingName.toLowerCase() === this.filter.toLowerCase() &&
          data.symptomName !== ''
      );
    });
  }

  activities: ActivityLogsModel[] = [];
  getTotalPUI(): void {
    this.activityLogsService.getActivityLogs().subscribe((response) => {
      this.activities = response.filter(
        (data) => data.buildingName.toLowerCase() === this.filter.toLowerCase()
      );
    });
  }
}
