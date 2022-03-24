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

  lineChartData: { value: number; name: string }[] = [];

  establishments = ['Penshoppe', 'Bench', 'Mcdo'];
  view: any;
  constructor(private activityLogsService: ActivityService) {}

  activityLogs: ActivityLogsModel[] = [];
  maleRecord: ActivityLogsModel[] = [];
  femaleRecord: ActivityLogsModel[] = [];

  ngOnInit(): void {
    this.getActivities();
    this.getTotalPUI();
    this.getAllMale();
    setTimeout(() => {
      this.storeData();
      this.loading = false;
    }, 2000);
  }

  storeData(): void {
    this.data = JSON.parse(
      JSON.stringify([
        {
          name: 'Male',
          value: this.maleRecord.length,
        },
        {
          name: 'Female',
          value: this.femaleRecord.length,
        },
      ])
    );

    this.lineChartData = JSON.parse(
      JSON.stringify([
        {
          name: 'MCDO',
          series: [
            {
              value: 4578,
              name: '2016-09-20T20:34:22.541Z',
            },
            {
              value: 5251,
              name: '2016-09-20T12:07:04.541Z',
            },
            {
              value: 2830,
              name: '2016-09-18T18:35:57.924Z',
            },
            {
              value: 6930,
              name: '2016-09-15T08:36:48.309Z',
            },
            {
              value: 6650,
              name: '2016-09-12T18:47:54.264Z',
            },
          ],
        },
        {
          name: 'Penshoppe',
          series: [
            {
              value: 5159,
              name: '2016-09-20T20:34:22.541Z',
            },
            {
              value: 6999,
              name: '2016-09-20T12:07:04.541Z',
            },
            {
              value: 5682,
              name: '2016-09-18T18:35:57.924Z',
            },
            {
              value: 6257,
              name: '2016-09-15T08:36:48.309Z',
            },
            {
              value: 5224,
              name: '2016-09-12T18:47:54.264Z',
            },
          ],
        },
        {
          name: 'Bench',
          series: [
            {
              value: 6994,
              name: '2016-09-20T20:34:22.541Z',
            },
            {
              value: 2824,
              name: '2016-09-20T12:07:04.541Z',
            },
            {
              value: 5429,
              name: '2016-09-18T18:35:57.924Z',
            },
            {
              value: 4221,
              name: '2016-09-15T08:36:48.309Z',
            },
            {
              value: 2068,
              name: '2016-09-12T18:47:54.264Z',
            },
          ],
        },
      ])
    );
  }

  expandTodaysList = true;
  expandTodayList(): void {
    this.expandTodaysList
      ? (this.expandTodaysList = false)
      : (this.expandTodaysList = true);
  }

  getAllMale(): void {
    this.activityLogsService.getActivityLogs().subscribe((response) => {
      this.maleRecord = response.filter(
        (data) => data.gender.toLowerCase() === 'male'
      );
    });
  }

  getAllFemale(): void {
    this.activityLogsService.getActivityLogs().subscribe((response) => {
      this.femaleRecord = response.filter(
        (data) => data.gender.toLowerCase() === 'female'
      );
    });
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
    this.activityLogsService.getActivities().subscribe((dataResponse) => {
      this.activities = dataResponse
    });
    // this.activityLogsService.getActivityLogs().subscribe((dataResponse) => {
    //   this.activities = dataResponse.filter(
    //     (data) => data.status.toLowerCase() === ('MCDO').toLowerCase()
    //   );
    // });
  }

  activities: ActivitiesModel[] = [];
  getTotalPUI(): void {
    this.activityLogsService.getActivityLogs().subscribe((response) => {
      this.activityLogs = response.filter(
        (data) => data.status.toLowerCase() === 'Has symptoms'.toLowerCase()
      );
    });
  }
}
