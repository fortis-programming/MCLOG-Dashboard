import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { routes as DashboardRoute } from '../dashboard/dashboard-routing.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent, 
    children:[
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      ...DashboardRoute
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
