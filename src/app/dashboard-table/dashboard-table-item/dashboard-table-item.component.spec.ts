import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTableItemComponent } from './dashboard-table-item.component';

describe('DashboardTableItemComponent', () => {
  let component: DashboardTableItemComponent;
  let fixture: ComponentFixture<DashboardTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
