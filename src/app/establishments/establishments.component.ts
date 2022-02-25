import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {
  establishments = ['Penshoppe', 'Bench', 'MCDO'];
  
  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    
  }
}
