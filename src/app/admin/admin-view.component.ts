import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { ActivitiesModel } from '../_shared/models/activities.model';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  headers: any = new HttpHeaders().set("Content-Type", "application/json");
  users: any = [];
  healtStatus: any = [];
  symptoms: any = [];
  buildings: any = [];
  activityLogs: any = [];
  buildingFilter = '';
  filter: string = 'All';
  isLoading: boolean = false;
  constructor(private http: HttpClient, 
    private activityService: ActivityService) {
  }


  ngOnInit(): void {
    // this.loadUsers();
    this.loadData();
  }

  responseData: any = [];
  loadData(): void {
    this.activityService.adminViewService().subscribe((response) => {
        if(response) {
          this.users = response.users;
          this.healtStatus = response.healthStatus;
          this.symptoms = response.symptoms;
          this.buildings = response.buildings;
          this.responseData = response.activityLogs;
          if(this.buildings) {
            this.buildingFilter = this.buildings[0].id;
          }
          console.log(this.responseData)
        }
        this.isLoading = false;
    })
  }

  public getBuilding(userId: any): string {
    console.log(userId);
    let building = '';
    let activityLog = this.activityLogs.find((x: any) => x.buildingId == this.buildingFilter && x.userId == userId);
    building = activityLog ? activityLog.buildingId : '';
    return building;
  }

  public getHealthStatus(userId: any): string {
    let status = '';
    let activityLogs = this.activityLogs.find((x: any) => x.buildingId == this.buildingFilter && x.userId == userId);
    if (activityLogs) {
      let healthStatus = this.healtStatus.find((x: any) => activityLogs.healthStatusId == x.id);
      if (healthStatus) {

        let symptom = this.symptoms.find((x: any) => x.userHealthStatusId == healthStatus.id);

        status = !symptom ? 'Healthy' : '';
        if (symptom) {
          for (let symptom of this.symptoms) {
            if (symptom.userHealthStatusId == healthStatus.id)
              status += `${symptom.symptomName}, `;
          }
          status = status.substr(0, status.length - 2);
        }
      }
      else {
        status = 'Healthy';
      }
    }
    return status;
  }

  expandTodaysList = true;
  expandTodayList(): void {
    this.expandTodaysList
      ? (this.expandTodaysList = false)
      : (this.expandTodaysList = true);
  }

  //filter = 'MCDO';
  //loading = true;
  //onChange(deviceValue: any) {
  //  this.filter = deviceValue.value;
  //  this.ngOnInit();
  //}

  //expandAllList = false;
  //expandAllData(): void {
  //  this.expandAllList
  //    ? (this.expandAllList = false)
  //    : (this.expandAllList = true);
  //}

  //getActivities(): void {
  //  this.activityLogsService.getActivityLogs().subscribe((dataResponse) => {
  //    this.activityLogs = dataResponse.filter(
  //      (data) =>
  //        data.buildingName.toLowerCase() === this.filter.toLowerCase() &&
  //        data.symptomName !== ''
  //    );
  //  });
  //}

  //activities: ActivityLogsModel[] = [];
  //getTotalPUI(): void {
  //  this.activityLogsService.getActivityLogs().subscribe((response) => {
  //    this.activities = response.filter(
  //      (data) => data.buildingName.toLowerCase() === this.filter.toLowerCase()
  //    );
  //  });
  //}
}
