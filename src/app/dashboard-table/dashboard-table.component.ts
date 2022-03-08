import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {
  @Input() activityLogs: ActivityLogsModel[] = [];

  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.activityService.getActivityLogs().subscribe(response => {
      this.activityLogs = response;
    })
  }

  expandTodaysList = true;
  expandTodayList(): void {
    (this.expandTodaysList)? this.expandTodaysList = false : this.expandTodaysList = true;
  }

  expandAllList = false;
  expandAllData(): void {
    (this.expandAllList)? this.expandAllList = false : this.expandAllList = true;
  }
}
