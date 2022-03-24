import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentItemComponent } from './establishments/establishment-item/establishment-item.component';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from 'src/environments/environment';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardTableItemComponent } from './dashboard-table/dashboard-table-item/dashboard-table-item.component';
import { AdminViewComponent } from './admin/admin-view.component';
import { FormsModule } from '@angular/forms';

const app = initializeApp(firebaseConfig);
const analytics =   getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EstablishmentsComponent,
    EstablishmentItemComponent,
    DashboardTableComponent,
    DashboardTableItemComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
