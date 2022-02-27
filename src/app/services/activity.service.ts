import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityLogsModel } from '../_shared/models/activityLogs.model';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(private http: HttpClient) { }

  //  CHANGE THIS URL WITH YOUR DEPLOYMENT URL
  apiURL = 'https://mclogapi20220219222916.azurewebsites.net/api/ActivityLogs';

  getActivityLogs(): Observable<ActivityLogsModel[]> {
    return this.http.get<ActivityLogsModel[]>(this.apiURL);
  }
}
