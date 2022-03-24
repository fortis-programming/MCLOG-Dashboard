import { Component, Input, OnInit } from '@angular/core';
import { ActivityLogsModel } from 'src/app/_shared/models/activityLogs.model';

@Component({
  selector: 'app-dashboard-table-item',
  templateUrl: './dashboard-table-item.component.html',
  styleUrls: ['./dashboard-table-item.component.scss']
})
export class DashboardTableItemComponent implements OnInit {
  @Input() activityLog: ActivityLogsModel = {
    buildingName: '',
    address: '',
    status: '',
    gender: '',
    age: '',
    activityDate: new Date()
  };

  constructor() { }

  date = 0;
  ngOnInit(): void {
    this.date = ((new Date(this.activityLog.activityDate)).getTime());
  }

}
