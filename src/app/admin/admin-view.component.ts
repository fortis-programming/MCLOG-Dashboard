import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { AdminModel } from '../_shared/models/admin.model';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})

export class AdminViewComponent implements OnInit {
  headers: any = new HttpHeaders().set("Content-Type", "application/json");
  users: any = [];
  healtStatus: { id: number; symptonName: string; userHealthStatusId: string;} []= [];
  symptoms: any = [];
  buildings = ['7-11', 'Mcdo'];
  activityLogs: any = [];
  buildingFilter = '';
  filter: string = 'All';
  isLoading: boolean = false;

  constructor(private http: HttpClient, 
    private activityService: ActivityService) {
  }

  adminList: AdminModel[] = [];

  ngOnInit(): void {
    // this.loadUsers();
    this.loadData().then(() => {
      this.checkIfUserHasSymptoms();
    });
  }

  responseData: any = [];
  async loadData(): Promise<boolean> {
    this.activityService.adminViewService().subscribe((response) => {
      this.adminList = response;
    })
    return true;
  }

  data = '';
  checkIfUserHasSymptoms(): void {
    this.activityService.checkForSymptoms().subscribe((data) => {
      this.healtStatus = data;
    })
  }

  getUserStatus(id: number): string {
    let response = '';
    (this.healtStatus.some((data: any) => data.userHealthStatusId == id))? response = 'Has Symptoms' : response = 'Healthy';
    return response
  }

  public getBuilding(userId: any): string {
    let building = '';
    let activityLog = this.activityLogs.find((x: any) => x.buildingId == this.buildingFilter && x.userId == userId);
    building = activityLog ? activityLog.buildingId : '';
    return building;
  }

  expandTodaysList = true;
  expandTodayList(): void {
    this.expandTodaysList
      ? (this.expandTodaysList = false)
      : (this.expandTodaysList = true);
  }
}
