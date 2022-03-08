import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { EstablishementModel } from 'src/app/_shared/models/establishment.model';

@Component({
  selector: 'app-establishment-item',
  templateUrl: './establishment-item.component.html',
  styleUrls: ['./establishment-item.component.scss'],
})
export class EstablishmentItemComponent implements OnInit {
  @Input() establishment: string = '';


  constructor(private activityLogsService: ActivityService) {}

  ngOnInit(): void {
  }
 
  recordCount = 0;
  getBuildingRecordCount(): number {
    // this.activityLogsService.getActivityLogs().subscribe((dataResponse) => {
    //   this.recordCount = dataResponse.filter((data) => data.buildingName.toLowerCase() === this.establishment.toLowerCase())
    //     .length;
    // });

    // return this.recordCount;
    return 0;
  }
}
