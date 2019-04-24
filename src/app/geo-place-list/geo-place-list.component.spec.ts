import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPlaceListComponent } from './geo-place-list.component';

describe('GeoPlaceListComponent', () => {
  let component: GeoPlaceListComponent;
  let fixture: ComponentFixture<GeoPlaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPlaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
