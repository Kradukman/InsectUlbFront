import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeoPlaceComponent } from './add-geo-place.component';

describe('AddGeoPlaceComponent', () => {
  let component: AddGeoPlaceComponent;
  let fixture: ComponentFixture<AddGeoPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeoPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeoPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
