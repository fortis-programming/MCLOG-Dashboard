import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentItemComponent } from './establishment-item.component';

describe('EstablishmentItemComponent', () => {
  let component: EstablishmentItemComponent;
  let fixture: ComponentFixture<EstablishmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
