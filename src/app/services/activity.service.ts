import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';
import { ActivitiesModel } from '../_shared/models/activities.model';
import { AdminModel } from '../_shared/models/admin.model';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(private http: HttpClient) { }

  //  CHANGE THIS URL WITH YOUR DEPLOYMENT URL
  apiURL = 'https://mclogapi20220325102303.azurewebsites.net/api/';
  //https://mclogapi20220219222916.azurewebsites.net/api/ActivityLogs
  

  getActivityLogs(): Observable<ActivityLogsModel[]> {
    return this.http.get<ActivityLogsModel[]>(this.apiURL + 'GetUserLogs');
  }

  getActivities(): Observable<ActivitiesModel[]> {
    return this.http.get<ActivitiesModel[]>(this.apiURL + 'ActivityLogs');
  }

  adminViewService(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(this.apiURL + 'users/GetAllUsers');
  }

  checkHealthService(): Observable<any> {
    return this.http.get<any>(this.apiURL + 'UserHealthStatus');
  }

  checkForSymptoms(): Observable<any> {
    return this.http.get<any>(this.apiURL + 'Symptoms');
  }
}
